/* Shared app logic for the course shell and the hub. */
(function () {
  "use strict";

  function qs(name) {
    return new URLSearchParams(location.search).get(name);
  }
  function storeKey(courseId) { return "wtc_progress_" + courseId; }
  function getProgress(courseId) {
    try { return JSON.parse(localStorage.getItem(storeKey(courseId))) || {}; }
    catch (e) { return {}; }
  }
  function setDone(courseId, topicId, done) {
    var p = getProgress(courseId);
    if (done) p[topicId] = true; else delete p[topicId];
    localStorage.setItem(storeKey(courseId), JSON.stringify(p));
  }
  function pctDone(course) {
    var p = getProgress(course.id);
    var n = course.topics.length || 1;
    var d = course.topics.filter(function (t) { return p[t.id]; }).length;
    return Math.round((d / n) * 100);
  }
  window.WTC = { getProgress: getProgress, pctDone: pctDone };

  /* ---------------- HUB ---------------- */
  function renderHub() {
    var host = document.getElementById("cards");
    if (!host || !window.COURSES) return;
    var order = ["theory", "html", "css", "js"];
    order.forEach(function (id) {
      var c = window.COURSES[id];
      if (!c) return;
      var pct = pctDone(c);
      var a = document.createElement("a");
      a.className = "card";
      a.href = "course.html?c=" + id;
      a.innerHTML =
        '<div class="ic" style="background:' + c.color + '">' + c.icon + '</div>' +
        '<h3>' + c.title + '</h3>' +
        '<p>' + c.subtitle + '</p>' +
        '<div class="meta"><span>' + c.topics.length + ' lessons</span><span>' + pct + '% done</span></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>';
      host.appendChild(a);
    });
  }

  /* ---------------- COURSE ---------------- */
  function escapeAttr(s){return String(s).replace(/"/g,'&quot;');}

  function renderCourse() {
    var id = qs("c");
    var course = window.COURSES && window.COURSES[id];
    var app = document.getElementById("app");
    if (!course) { if (app) app.innerHTML = '<div class="content"><p>Course not found. <a href="index.html">Back to home</a></p></div>'; return; }

    document.title = course.title + " — WebTech Courses";
    var topics = course.topics;
    var current = 0;
    var hash = location.hash.replace("#", "");
    var idx = topics.findIndex(function (t) { return t.id === hash; });
    if (idx >= 0) current = idx;

    app.innerHTML =
      '<button class="menu-btn" id="menuBtn">☰</button>' +
      '<div class="backdrop" id="backdrop"></div>' +
      '<aside class="sidebar" id="sidebar">' +
        '<a class="home" href="index.html">← All courses</a>' +
        '<h2 style="color:' + course.color + '">' + course.icon + ' ' + course.title + '</h2>' +
        '<div class="sub">' + course.subtitle + '</div>' +
        '<div class="progress-wrap"><div class="label"><span>Progress</span><span id="pctLabel"></span></div>' +
          '<div class="bar"><i id="pctBar"></i></div></div>' +
        '<ul class="toc" id="toc"></ul>' +
      '</aside>' +
      '<main class="content"><div id="lesson"></div></main>';

    var toc = document.getElementById("toc");
    function tagClass(tag){
      if(!tag) return "";
      var t = tag.toLowerCase();
      if (t.indexOf("exam")>=0) return "exam";
      if (t.indexOf("short")>=0) return "short";
      if (t.indexOf("code")>=0) return "code";
      if (t.indexOf("output")>=0) return "output";
      return "mcq";
    }
    function buildToc() {
      var prog = getProgress(course.id);
      toc.innerHTML = "";
      topics.forEach(function (t, i) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + t.id;
        a.className = (i === current ? "active " : "") + (prog[t.id] ? "done" : "");
        a.innerHTML = '<span class="num">' + (i + 1) + '</span><span class="t">' + t.title + '</span>';
        a.addEventListener("click", function (e) { e.preventDefault(); go(i); closeMenu(); });
        li.appendChild(a);
        toc.appendChild(li);
      });
    }
    function updateProgressUI() {
      var pct = pctDone(course);
      document.getElementById("pctBar").style.width = pct + "%";
      document.getElementById("pctLabel").textContent = pct + "%";
    }
    function go(i) {
      current = Math.max(0, Math.min(topics.length - 1, i));
      location.hash = topics[current].id;
      renderLesson();
      buildToc();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function renderLesson() {
      var t = topics[current];
      var prog = getProgress(course.id);
      var done = !!prog[t.id];
      var tagHtml = t.tag ? '<span class="tag ' + tagClass(t.tag) + '">' + t.tag + '</span>' : "";
      var quizHtml = (t.quiz || []).map(quizBlock).join("");
      var host = document.getElementById("lesson");
      host.className = "lesson";
      host.innerHTML =
        '<div class="crumbs">' + course.title + ' · Lesson ' + (current + 1) + ' of ' + topics.length + '</div>' +
        '<h1>' + t.title + '</h1>' +
        '<div style="margin:8px 0 18px">' + tagHtml + '</div>' +
        t.html +
        quizHtml +
        '<div class="lesson-nav">' +
          '<button id="prevBtn"' + (current === 0 ? " disabled" : "") + '>← Previous</button>' +
          '<button class="done-btn" id="doneBtn">' + (done ? "✓ Completed" : "Mark complete") + '</button>' +
          '<button id="nextBtn"' + (current === topics.length - 1 ? " disabled" : "") + '>Next →</button>' +
        '</div>';

      document.getElementById("prevBtn").onclick = function () { go(current - 1); };
      document.getElementById("nextBtn").onclick = function () { go(current + 1); };
      document.getElementById("doneBtn").onclick = function () {
        var nowDone = !getProgress(course.id)[t.id];
        setDone(course.id, t.id, nowDone);
        updateProgressUI(); buildToc();
        document.getElementById("doneBtn").textContent = nowDone ? "✓ Completed" : "Mark complete";
        if (nowDone && current < topics.length - 1) setTimeout(function(){ go(current+1); }, 350);
      };
      wrapTables();
      wireQuizzes();
      wireRunners();
    }

    function wrapTables() {
      [].forEach.call(document.querySelectorAll(".lesson table.t"), function (tbl) {
        if (tbl.parentNode.classList.contains("table-wrap")) return;
        var w = document.createElement("div");
        w.className = "table-wrap";
        tbl.parentNode.insertBefore(w, tbl);
        w.appendChild(tbl);
      });
    }

    function quizBlock(q, i) {
      var opts = q.options.map(function (o, oi) {
        return '<li><button data-i="' + oi + '">' + o + '</button></li>';
      }).join("");
      return '<div class="quiz" data-answer="' + q.answer + '">' +
        '<div class="qh">Q' + (i + 1) + '. ' + q.q + '</div>' +
        '<ul class="opts">' + opts + '</ul>' +
        '<div class="explain">' + (q.explain || "") + '</div></div>';
    }
    function wireQuizzes() {
      [].forEach.call(document.querySelectorAll(".quiz"), function (qz) {
        var ans = parseInt(qz.getAttribute("data-answer"), 10);
        var btns = qz.querySelectorAll(".opts button");
        [].forEach.call(btns, function (b) {
          b.addEventListener("click", function () {
            var pick = parseInt(b.getAttribute("data-i"), 10);
            [].forEach.call(btns, function (x) { x.disabled = true; });
            btns[ans].classList.add("correct");
            if (pick !== ans) b.classList.add("wrong");
            qz.querySelector(".explain").classList.add("show");
          });
        });
      });
    }

    function wireRunners() {
      [].forEach.call(document.querySelectorAll("pre[data-run]"), function (pre) {
        var btn = document.createElement("button");
        btn.className = "run-btn"; btn.textContent = "▶ Run";
        pre.appendChild(btn);
        btn.addEventListener("click", function () {
          var code = pre.querySelector("code").textContent;
          var out = pre.nextElementSibling;
          if (!out || !out.classList.contains("run-out")) {
            out = document.createElement("div"); out.className = "run-out";
            pre.parentNode.insertBefore(out, pre.nextSibling);
          }
          var logs = [];
          var origLog = console.log;
          console.log = function () { logs.push([].slice.call(arguments).map(fmt).join(" ")); };
          out.classList.remove("err");
          try {
            // eslint-disable-next-line no-new-func
            (new Function(code))();
            out.textContent = logs.length ? logs.join("\n") : "(ran with no console output)";
          } catch (e) {
            out.classList.add("err");
            out.textContent = (logs.length ? logs.join("\n") + "\n" : "") + e;
          } finally {
            console.log = origLog;
          }
        });
      });
    }
    function fmt(v) {
      if (typeof v === "object") { try { return JSON.stringify(v); } catch (e) { return String(v); } }
      return String(v);
    }

    /* mobile menu */
    function openMenu(){ document.getElementById("sidebar").classList.add("open"); document.getElementById("backdrop").classList.add("show"); }
    function closeMenu(){ document.getElementById("sidebar").classList.remove("open"); document.getElementById("backdrop").classList.remove("show"); }
    document.getElementById("menuBtn").onclick = openMenu;
    document.getElementById("backdrop").onclick = closeMenu;

    buildToc(); updateProgressUI(); renderLesson();
    window.addEventListener("hashchange", function () {
      var h = location.hash.replace("#", "");
      var i = topics.findIndex(function (t) { return t.id === h; });
      if (i >= 0 && i !== current) go(i);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("cards")) renderHub();
    if (document.getElementById("app")) renderCourse();
  });
})();
