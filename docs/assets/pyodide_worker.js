/**
 * Web Worker: runs Pyodide and uses SharedArrayBuffer so the main thread
 * can show an inline input in the console instead of a popup.
 */
"use strict";

let pyodide = null;
let sab = null;
const READY_INT32_INDEX = 0;
const LENGTH_OFFSET_BYTES = 4;
const DATA_OFFSET_BYTES = 8;
const STDIN_MAX_BYTES = 2048;

function readStdinFromSab() {
  if (!sab) return "\n";
  const u8 = new Uint8Array(sab);
  const dv = new DataView(sab);
  const len = dv.getUint32(LENGTH_OFFSET_BYTES, true);
  if (len <= 0 || len > STDIN_MAX_BYTES) return "\n";
  const bytes = u8.slice(DATA_OFFSET_BYTES, DATA_OFFSET_BYTES + len);
  const str = new TextDecoder().decode(bytes);
  new Int32Array(sab)[READY_INT32_INDEX] = 0;
  return str.endsWith("\n") ? str : str + "\n";
}

// Same as main thread: override builtins.input so prompt is passed to JS explicitly.
const INPUT_OVERRIDE_CODE = [
  "import builtins",
  "def _web_input(prompt=''):",
  "    from js import promptUser",
  "    s = promptUser(str(prompt))",
  "    if s is None: return ''",
  "    return str(s)",
  "builtins.input = _web_input",
].join("\n");

async function ensurePyodide() {
  if (pyodide) return pyodide;
  if (typeof self.loadPyodide === "undefined") {
    self.importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
  }
  pyodide = await self.loadPyodide({
    stdin: () => {
      self.postMessage({ type: "stdin" });
      if (sab) {
        Atomics.wait(new Int32Array(sab), READY_INT32_INDEX, 0);
        return readStdinFromSab();
      }
      return "\n";
    },
  });
  // Overridden input() calls this; we send prompt to main thread so the UI shows correct text.
  self.promptUser = function (prompt) {
    self.postMessage({ type: "stdin", prompt: prompt });
    if (sab) {
      Atomics.wait(new Int32Array(sab), READY_INT32_INDEX, 0);
      const line = readStdinFromSab();
      return line.endsWith("\n") ? line.slice(0, -1) : line;
    }
    return "";
  };
  await pyodide.runPythonAsync(INPUT_OVERRIDE_CODE);
  return pyodide;
}

self.onmessage = async function (e) {
  const data = e.data;
  if (data.sab) {
    sab = data.sab;
    self.postMessage({ type: "ready" });
    return;
  }
  if (data.type !== "run" || typeof data.code !== "string") return;

  try {
    const runtime = await ensurePyodide();
    runtime.setStdout({
      batched: (value) => self.postMessage({ type: "stdout", value }),
    });
    runtime.setStderr({
      batched: (value) => self.postMessage({ type: "stderr", value }),
    });
    await runtime.runPythonAsync(data.code);
    self.postMessage({ type: "done" });
  } catch (err) {
    self.postMessage({
      type: "error",
      message: err && err.message ? err.message : String(err),
    });
  }
};
