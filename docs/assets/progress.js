/*
 * Tutorial progress tracker — two tutorials, browser-only, no accounts.
 *
 * Tutorials:
 *   - snake   (beginner)    : pages live at  /class-NN/
 *   - flappy  (intermediate): pages live at  /flappy/class-NN/
 *
 * On a class's /done page, mark <tutorial>-done:class-NN = "1".
 * On the main landing page, decorate each <div class="tutorial-card"
 * data-tutorial="snake|flappy"> with a progress summary, a Continue
 * button, and ✅ marks in its class-list table.
 *
 * Storage keys are separate per tutorial so the two never collide.
 */
(function () {
  "use strict";

  const TUTORIALS = [
    {
      id: "snake",
      label: "Snake",
      total: 12,
      // /class-NN/  (NOT /flappy/class-NN/)
      classRe: /^(?:.*\/)?class-(\d{2})(?:\/|\.html|$)/,
      isMineRe: function (path) {
        // exclude flappy subtree
        if (/\/flappy\//.test(path)) return false;
        return this.classRe.test(path);
      },
      classListPath: function (n) {
        return "./class-" + String(n).padStart(2, "0") + "/";
      },
    },
    {
      id: "flappy",
      label: "Flappy Bird",
      total: 12,
      classRe: /\/flappy\/class-(\d{2})(?:\/|\.html|$)/,
      isMineRe: function (path) { return this.classRe.test(path); },
      classListPath: function (n) {
        return "./flappy/class-" + String(n).padStart(2, "0") + "/";
      },
    },
  ];

  function classId(n) { return "class-" + String(n).padStart(2, "0"); }
  function prefix(t) { return t.id + "-done:"; }

  function isDone(t, n) {
    try { return localStorage.getItem(prefix(t) + classId(n)) === "1"; }
    catch (_) { return false; }
  }
  function markDone(t, n) {
    try { localStorage.setItem(prefix(t) + classId(n), "1"); } catch (_) {}
  }
  function clearAllProgress() {
    for (const t of TUTORIALS) {
      for (let i = 1; i <= t.total; i++) {
        try { localStorage.removeItem(prefix(t) + classId(i)); } catch (_) {}
      }
    }
  }

  function doneCount(t) {
    let n = 0;
    for (let i = 1; i <= t.total; i++) if (isDone(t, i)) n++;
    return n;
  }
  function nextUncompleted(t) {
    for (let i = 1; i <= t.total; i++) if (!isDone(t, i)) return i;
    return null;
  }

  function whichTutorial() {
    const path = location.pathname;
    for (const t of TUTORIALS) if (t.isMineRe(path)) return t;
    return null;
  }

  function classFromPath(t) {
    const m = location.pathname.match(t.classRe);
    return m ? parseInt(m[1], 10) : null;
  }

  function onDonePage() {
    return /\/class-\d{2}\/done(\.html?)?\/?$/.test(location.pathname);
  }

  // --- Mark progress on done pages ---
  function markIfDone() {
    if (!onDonePage()) return;
    const t = whichTutorial();
    if (!t) return;
    const n = classFromPath(t);
    if (n) markDone(t, n);
  }

  // --- Landing-page decoration ---

  function buildSummary(t) {
    const n = doneCount(t);
    const pct = Math.round((n / t.total) * 100);
    const wrap = document.createElement("div");
    wrap.className = "snake-progress";
    wrap.innerHTML =
      '<div class="snake-progress-head">' +
      '<strong>🏆 Progress:</strong> ' + n + ' of ' + t.total +
      ' classes done' + (n === t.total ? ' — full game built!' : '') +
      '</div>' +
      '<div class="snake-progress-bar"><div class="snake-progress-fill"' +
      ' style="width:' + pct + '%"></div></div>';
    return wrap;
  }

  function buildContinue(t) {
    const next = nextUncompleted(t);
    if (next == null) return null;
    const n = doneCount(t);
    const label = n === 0
      ? "▶ Start " + t.label + " — Class 1"
      : "▶ Continue " + t.label + " — Class " + next;
    const a = document.createElement("a");
    a.className = "snake-continue";
    a.href = t.classListPath(next);
    a.textContent = label;
    const wrap = document.createElement("p");
    wrap.style.cssText = "text-align:center;margin:1.25em 0;";
    wrap.appendChild(a);
    return wrap;
  }

  function decorateCard(card) {
    const id = card.getAttribute("data-tutorial");
    const t = TUTORIALS.find((x) => x.id === id);
    if (!t) return;

    // Insert progress + continue button right after the heading inside the card.
    const headEl = card.querySelector("h2, h3, h1") || card.firstElementChild;
    if (headEl) {
      const summary = buildSummary(t);
      headEl.parentNode.insertBefore(summary, headEl.nextSibling);
      const cont = buildContinue(t);
      if (cont) headEl.parentNode.insertBefore(cont, summary.nextSibling);
    } else {
      card.appendChild(buildSummary(t));
      const cont = buildContinue(t);
      if (cont) card.appendChild(cont);
    }

    // Swap the lock emoji for ✅ in the class-list table.
    card.querySelectorAll('a[href*="class-"]').forEach((a) => {
      const m = a.getAttribute("href").match(/class-(\d{2})/);
      if (!m) return;
      if (!isDone(t, parseInt(m[1], 10))) return;
      const tr = a.closest("tr");
      if (tr && tr.cells.length) tr.cells[0].textContent = "✅";
    });
  }

  function decorateLanding() {
    const cards = document.querySelectorAll('.tutorial-card[data-tutorial]');
    if (!cards.length) return;
    cards.forEach(decorateCard);

    // Single 'Clear all progress' link at the bottom of the page.
    const main = document.querySelector(".main-content") || document.body;
    const p = document.createElement("p");
    p.className = "snake-clear";
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "Clear saved progress";
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      if (!confirm("Clear ALL Snake + Flappy Bird progress? This can't be undone.")) return;
      clearAllProgress();
      location.reload();
    });
    p.appendChild(a);
    main.appendChild(p);
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
