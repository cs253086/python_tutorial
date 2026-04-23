/*
 * Snake-tutorial progress tracker — browser localStorage only, no accounts.
 *
 * - When the kid lands on /class-NN/done.html, mark that class as complete.
 * - On the landing page, swap the class-list emoji for ✅ when done,
 *   add a progress counter, a "Continue where you left off" button
 *   pointing at the next uncompleted class, and a small parent-facing
 *   "Clear progress" link.
 */
(function () {
  "use strict";

  const PREFIX = "snake-done:";
  const TOTAL = 12;

  function classId(n) {
    return "class-" + String(n).padStart(2, "0");
  }

  function isDone(id) {
    try { return localStorage.getItem(PREFIX + id) === "1"; }
    catch (_) { return false; }
  }

  function markDone(id) {
    try { localStorage.setItem(PREFIX + id, "1"); } catch (_) {}
  }

  function clearAll() {
    for (let i = 1; i <= TOTAL; i++) {
      try { localStorage.removeItem(PREFIX + classId(i)); } catch (_) {}
    }
  }

  function doneCount() {
    let n = 0;
    for (let i = 1; i <= TOTAL; i++) {
      if (isDone(classId(i))) n++;
    }
    return n;
  }

  function nextUncompleted() {
    for (let i = 1; i <= TOTAL; i++) {
      if (!isDone(classId(i))) return i;
    }
    return null;
  }

  function parseClassFromPath() {
    const m = location.pathname.match(/\/class-(\d{2})\//);
    return m ? classId(parseInt(m[1], 10)) : null;
  }

  function onDonePage() {
    return /\/class-\d{2}\/done(\.html?)?\/?$/.test(location.pathname);
  }

  function looksLikeLanding() {
    // The landing page links to many classes. A class/step page links
    // to at most a couple.
    return document.querySelectorAll('a[href*="class-"]').length >= 6;
  }

  // --- Mark progress on done pages ---
  function markIfDone() {
    if (onDonePage()) {
      const id = parseClassFromPath();
      if (id) markDone(id);
    }
  }

  // --- Landing page decoration ---

  function insertAfter(newNode, refNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
  }

  function swapEmojiInClassTable() {
    document.querySelectorAll('a[href*="class-"]').forEach((a) => {
      const m = a.getAttribute("href").match(/class-(\d{2})/);
      if (!m) return;
      const id = classId(parseInt(m[1], 10));
      if (!isDone(id)) return;
      const tr = a.closest("tr");
      if (!tr || !tr.cells.length) return;
      // First cell is the lock/unlock emoji in our class list
      tr.cells[0].textContent = "✅";
    });
  }

  function buildProgressSummary() {
    const n = doneCount();
    const pct = Math.round((n / TOTAL) * 100);
    const wrap = document.createElement("div");
    wrap.className = "snake-progress";
    wrap.innerHTML =
      '<div class="snake-progress-head">' +
      '<strong>🏆 Your progress:</strong> ' + n + ' of ' + TOTAL +
      ' classes done' + (n === TOTAL ? ' — you built the whole game!' : '') +
      '</div>' +
      '<div class="snake-progress-bar"><div class="snake-progress-fill"' +
      ' style="width:' + pct + '%"></div></div>';
    return wrap;
  }

  function buildContinueButton() {
    const next = nextUncompleted();
    if (next == null) return null;
    const n = doneCount();
    const label = n === 0 ? "▶ Start Class 1" : "▶ Continue with Class " + next;
    const a = document.createElement("a");
    a.className = "snake-continue";
    a.href = "./" + classId(next) + "/";
    a.textContent = label;
    const wrap = document.createElement("p");
    wrap.style.cssText = "text-align:center;margin:1.5em 0;";
    wrap.appendChild(a);
    return wrap;
  }

  function buildClearLink() {
    const p = document.createElement("p");
    p.className = "snake-clear";
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "Clear saved progress";
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      if (!confirm("Clear all Snake Tutorial progress? This can't be undone.")) return;
      clearAll();
      location.reload();
    });
    p.appendChild(a);
    return p;
  }

  function decorateLanding() {
    if (!looksLikeLanding()) return;
    const main = document.querySelector(".main-content") || document.body;
    const h1 = main.querySelector("h1");
    if (!h1) return;

    // Progress summary right after the H1.
    insertAfter(buildProgressSummary(), h1);

    // Continue button right after the summary.
    const cont = buildContinueButton();
    if (cont) insertAfter(cont, h1.nextSibling);

    // Swap emojis in the class table.
    swapEmojiInClassTable();

    // Parent-facing clear-progress link at the bottom.
    main.appendChild(buildClearLink());
  }

  function init() {
    markIfDone();
    decorateLanding();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
