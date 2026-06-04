window.COURSES = window.COURSES || {};
window.COURSES["js"] = {
  id: "js",
  title: "JavaScript",
  subtitle: "Logic & interactivity — MCQ gotchas + the DOM/form code marks.",
  color: "#f0c000",
  icon: "JS",
  topics: [
    {
      id: "what-is-js",
      title: "What JavaScript Is",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Fact</th><th>Meaning</th></tr>
        <tr><td><b>Client-side</b></td><td>Executes in the <b>browser</b></td></tr>
        <tr><td><b>Scripting language</b></td><td>Historically used for automation</td></tr>
        <tr><td><b>Interpreted</b></td><td>Runs <b>line by line</b> (not compiled all at once)</td></tr>
        <tr><td><b>Old name = ECMAScript</b></td><td>Remember for MCQ</td></tr>
        <tr><td><b>Created by Brendan Eich</b></td><td>Remember the creator</td></tr></table>
        <p><b>Interpreted vs compiled:</b> in C++ you compile the whole file before running; JavaScript (like Python) runs one line at a time. <code>console.log("hi")</code> works on its own — no main function.</p>
        <pre data-run><code>console.log("JavaScript runs line by line");
console.log(1 + 2);</code></pre>
        <div class="hook"><b>Hook:</b> <b>I</b>nterpreted = <b>I</b>mmediate, line by line.</div>
      `,
      quiz: [
        { q: "JavaScript's official/old name is…", options: ["JScript", "ECMAScript", "LiveScript", "TypeScript"], answer: 1, explain: "JS is standardized as ECMAScript by ECMA International." },
        { q: "JavaScript is an … language.", options: ["Compiled", "Interpreted", "Assembly", "Markup"], answer: 1, explain: "JS is interpreted — it runs line by line." }
      ]
    },
    {
      id: "run-connect",
      title: "Running JS & Connecting to HTML",
      tag: "EXAM-KEY",
      html: `
        <h3>Two environments</h3>
        <ul>
          <li><b>Runtime on your computer:</b> <b>Node.js</b> (most popular), Deno, Bun. Run with <code>node file.js</code>.</li>
          <li><b>Browser:</b> built-in engine runs HTML/CSS/JS — no compiler to install. (Or Inspect → Console, line by line.)</li>
        </ul>
        <h3>Connecting JS to HTML</h3>
        <pre><code>&lt;script src="test.js"&gt;&lt;/script&gt;   &lt;!-- external: use src --&gt;
&lt;script&gt; alert("Hello"); &lt;/script&gt; &lt;!-- internal --&gt;</code></pre>
        <div class="note warn"><b>Two exam traps:</b>
        <ol><li>Use <b>src</b>, NOT <b>href</b> (linking JS with href does nothing).</li>
        <li>Put <code>&lt;script&gt;</code> at the <b>END of &lt;body&gt;</b> so all HTML loads first. A script before a <code>&lt;p&gt;</code> can't change it — the text won't appear.</li></ol></div>
        <div class="hook"><b>Hook:</b> Script = Src, and Script goes at the South (bottom) of the body.</div>
      `,
      quiz: [
        { q: "Which attribute links an external JS file?", options: ["href", "src", "link", "rel"], answer: 1, explain: "Use src for scripts. href is for <a>/<link>." },
        { q: "Why put <script> at the end of <body>?", options: ["It loads faster only", "So all HTML elements exist before JS runs", "It's required syntax", "To hide the code"], answer: 1, explain: "JS modifies HTML, so the elements must load first." }
      ]
    },
    {
      id: "variables",
      title: "Variables & Scope (var/let/const)",
      tag: "EXAM-KEY",
      html: `
        <p><b>Loosely / dynamically typed:</b> no data type declared. The same variable can hold a number, then a string, then anything.</p>
        <pre data-run><code>let x = 10;        // number
x = "hello";       // now a string
x = true;          // now boolean
console.log(x);</code></pre>
        <table class="t"><tr><th>Keyword</th><th>Scope</th><th>Reassign?</th><th>Redeclare same name?</th></tr>
        <tr><td><b>var</b></td><td>Function</td><td>Yes</td><td>Yes (allowed)</td></tr>
        <tr><td><b>let</b></td><td>Block</td><td>Yes</td><td>No</td></tr>
        <tr><td><b>const</b></td><td>Block</td><td><b>No</b></td><td>No</td></tr></table>
        <p><b>const</b> can't be reassigned and must get a value at declaration. Declaring with <b>no keyword</b> = global variable = worst practice.</p>
        <h3>Function scope vs Block scope</h3>
        <p>A "block" = anything in <code>{ }</code>. <b>var</b> leaks out of if/for blocks (function scope). <b>let/const</b> stay inside the block.</p>
        <div class="hook"><b>Hook:</b> var is a leaky bucket (escapes { } blocks). let/const are sealed.</div>
      `,
      quiz: [
        { q: "Which keyword cannot be reassigned?", options: ["var", "let", "const", "all of them"], answer: 2, explain: "const can't be reassigned and must be initialized at declaration." },
        { q: "let and const are … scoped.", options: ["Function", "Block", "Global", "File"], answer: 1, explain: "let/const are block scoped; var is function scoped." }
      ]
    },
    {
      id: "data-types",
      title: "Data Types",
      tag: "MCQ",
      html: `
        <p>University slide says <b>4 primitive + 2 complex</b>. Official docs say <b>8 total = 7 primitive + 1 object</b>.</p>
        <p><b>7 primitives:</b> number, BigInt, string, boolean, null, undefined, symbol.</p>
        <ul>
          <li>No separate int/float — all <b>number</b>.</li>
          <li>No separate char — all <b>string</b>.</li>
        </ul>
        <p><b>Object</b> = key-value pairs (like a Python dictionary). Arrays and functions are also objects.</p>
        <div class="note">If asked "how many data types," <b>6 primitive</b> is the safe answer — but read the options (docs say 7).</div>
      `,
      quiz: [
        { q: "In JS, the type for both 5 and 5.7 is…", options: ["int and float", "number (both)", "decimal", "double"], answer: 1, explain: "JS has no separate int/float — everything numeric is `number`." }
      ]
    },
    {
      id: "null-undefined",
      title: "null vs undefined",
      tag: "EXAM-KEY",
      html: `
        <table class="t"><tr><th></th><th>undefined</th><th>null</th></tr>
        <tr><td>Meaning</td><td>You said <b>nothing</b> (declared, no value) — JS default</td><td>You <b>intentionally</b> set it empty</td></tr>
        <tr><td>Example</td><td><code>let x;</code></td><td><code>let x = null;</code></td></tr></table>
        <pre data-run><code>let a;
console.log(a);   // undefined (the default)</code></pre>
        <div class="hook"><b>Hook:</b> undefined = "I dunno, you never told me." null = "on purpose, leave it empty."</div>
      `,
      quiz: [
        { q: "A variable declared but never assigned prints…", options: ["null", "undefined", "0", "error"], answer: 1, explain: "undefined is JS's default for an unassigned variable." }
      ]
    },
    {
      id: "typeof",
      title: "typeof (the gotchas)",
      tag: "EXAM-KEY",
      html: `
        <table class="t"><tr><th>Value</th><th>typeof returns</th></tr>
        <tr><td>a number</td><td>"number"</td></tr>
        <tr><td>a string</td><td>"string"</td></tr>
        <tr><td>undefined</td><td>"undefined"</td></tr>
        <tr><td><b>null</b></td><td><b>"object"</b> ⚠️ famous bug</td></tr>
        <tr><td><b>a function</b></td><td><b>"function"</b></td></tr>
        <tr><td><b>an array</b></td><td><b>"object"</b></td></tr></table>
        <pre data-run><code>console.log(typeof null);       // object
console.log(typeof function(){});// function
console.log(typeof [1,2,3]);    // object</code></pre>
        <div class="note warn"><b>Memorize:</b> typeof null → "object", typeof function → "function", typeof array → "object".</div>
      `,
      quiz: [
        { q: "typeof null returns…", options: ["\"null\"", "\"object\"", "\"undefined\"", "error"], answer: 1, explain: "typeof null is \"object\" — a long-standing JS bug." },
        { q: "typeof an array returns…", options: ["\"array\"", "\"object\"", "\"list\"", "\"function\""], answer: 1, explain: "Arrays are objects, so typeof array → \"object\"." }
      ]
    },
    {
      id: "strings",
      title: "Strings & Interpolation",
      tag: "EXAM-KEY",
      html: `
        <p>Three ways to write a string: <code>"double"</code>, <code>'single'</code> (same), and <b>backticks</b> (special).</p>
        <h3>Backticks do two special things</h3>
        <ol>
          <li><b>Multi-line strings.</b></li>
          <li><b>String interpolation</b> — embed a variable with <code>\${ }</code>:</li>
        </ol>
        <pre data-run><code>let name = "World";
console.log(\`Hello \${name}\`);  // Hello World</code></pre>
        <p>The <code>\${variable}</code> syntax is called <b>string interpolation</b> — memorize this term.</p>
        <ul>
          <li><code>str.length</code> — character count (no brackets). <b><code>\\n</code> counts as ONE character.</b></li>
          <li><b>String + number = concatenation:</b> <code>"5" + 5</code> → <code>"55"</code>.</li>
          <li><b>String - number = subtraction:</b> <code>"10" - "5"</code> → <code>5</code>.</li>
        </ul>
        <pre data-run><code>console.log("5" + 5);   // "55" (concatenation)
console.log("10" - "5"); // 5  (forced numeric)</code></pre>
      `,
      quiz: [
        { q: "The ${variable} syntax inside backticks is called…", options: ["Concatenation", "String interpolation", "Templating engine", "Substitution"], answer: 1, explain: "Embedding a variable with ${ } in a backtick string = string interpolation." },
        { q: "What is \"5\" + 5 in JavaScript?", options: ["10", "\"55\"", "NaN", "error"], answer: 1, explain: "String + number concatenates → \"55\"." }
      ]
    },
    {
      id: "misc",
      title: "Literals, Comments, NaN, isNaN",
      tag: "MCQ",
      html: `
        <ul>
          <li><b>Semicolons optional</b> — JS auto-inserts them (<b>Automatic Semicolon Insertion / ASI</b>).</li>
          <li><b>Literals</b> = final values that can't be broken down: <code>42</code>, <code>true</code>, <code>"Alice"</code>. A variable name is NOT a literal.</li>
          <li>Comments: <code>// line</code>, <code>/* block */</code>.</li>
          <li><b>NaN</b> (Not a Number): from invalid math, e.g. <code>"abc" * "def"</code>.</li>
          <li><b>isNaN()</b> asks "is this NOT a number?" → true if not a number.</li>
        </ul>
        <pre data-run><code>console.log("abc" * 2);     // NaN
console.log(isNaN("hello")); // true
console.log(typeof NaN);     // "number"  (!!)</code></pre>
        <div class="note warn"><b>Gotcha:</b> <code>typeof NaN</code> → <b>"number"</b> (it means "not a number" but its type is number).</div>
      `,
      quiz: [
        { q: "typeof NaN returns…", options: ["\"NaN\"", "\"number\"", "\"undefined\"", "error"], answer: 1, explain: "Despite the name, typeof NaN is \"number\"." },
        { q: "Which is a literal?", options: ["age", "myVar", "42", "x"], answer: 2, explain: "42 is a final value (literal); variable names are not literals." }
      ]
    },
    {
      id: "operators",
      title: "Operators & == vs ===",
      tag: "EXAM-KEY",
      html: `
        <table class="t"><tr><th>Operator</th><th>Meaning</th></tr>
        <tr><td><code>**</code></td><td>Exponent — <code>2 ** 4</code> = 16</td></tr>
        <tr><td><code>%</code></td><td>Modulus (remainder)</td></tr>
        <tr><td><code>++ --</code></td><td>Increment / decrement</td></tr>
        <tr><td><code>+= -= *= /=</code></td><td>Compound assignment</td></tr>
        <tr><td><code>&& || !</code></td><td>Logical AND / OR / NOT</td></tr></table>
        <p><b>Invalid operator trap:</b> arithmetic comes <b>before</b> <code>=</code>. So <code>+=</code> valid, <code>=+</code> invalid.</p>
        <h3>== vs ===</h3>
        <table class="t"><tr><th>Operator</th><th>Checks</th></tr>
        <tr><td><code>==</code> (loose)</td><td><b>Value only</b> (ignores type)</td></tr>
        <tr><td><code>===</code> (strict)</td><td><b>Value AND type</b></td></tr></table>
        <pre data-run><code>console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(null == undefined);  // true
console.log(null === undefined); // false</code></pre>
        <div class="hook"><b>Hook:</b> more = signs = more strict. Triple = checks "type too."</div>
        <h3>Ternary operator</h3>
        <pre data-run><code>let age = 20;
console.log(age >= 18 ? "Can vote" : "Cannot");</code></pre>
      `,
      quiz: [
        { q: "5 === \"5\" evaluates to…", options: ["true", "false", "NaN", "error"], answer: 1, explain: "=== checks value AND type; number 5 ≠ string \"5\"." },
        { q: "Which is valid?", options: ["x =+ 5", "x += 5", "x =* 5", "x =/ 5"], answer: 1, explain: "Arithmetic comes before =: += is valid, =+ is not." }
      ]
    },
    {
      id: "truthy-falsy",
      title: "Truthy / Falsy",
      tag: "EXAM-KEY",
      html: `
        <p>Inside <code>if ( ... )</code>, a value is evaluated to true/false. <b>Falsy</b> → else runs; <b>truthy</b> → if runs.</p>
        <h3>The 8 FALSY values (memorize)</h3>
        <p><code>false</code>, <code>0</code>, <code>null</code>, <code>undefined</code>, <code>""</code> (empty string), <code>NaN</code>, <code>-0</code>, <code>0n</code> (BigInt zero).</p>
        <p><b>Everything else is truthy</b> — including these gotchas:</p>
        <ul>
          <li><code>[]</code> (empty array) → <b>truthy</b></li>
          <li><code>{}</code> (empty object) → <b>truthy</b></li>
          <li><code>"0"</code> (string zero) → <b>truthy</b></li>
        </ul>
        <pre data-run><code>if ([]) console.log("empty array is truthy");
console.log(2 == true);  // false! (true -> 1, and 2 != 1)</code></pre>
        <div class="note warn"><b>Nastiest gotcha:</b> <code>2</code> is truthy, but <code>2 == true</code> is <b>false</b>. Memorize as a fact.</div>
        <div class="hook"><b>Hook:</b> "Falsy = the 8 nothings." Anything with substance — even <code>[]</code> or <code>{}</code> — is truthy.</div>
      `,
      quiz: [
        { q: "Which is a FALSY value?", options: ["[]", "{}", "\"0\"", "\"\" (empty string)"], answer: 3, explain: "Empty string is falsy. [], {}, and \"0\" are all truthy." },
        { q: "2 == true evaluates to…", options: ["true", "false", "NaN", "error"], answer: 1, explain: "true converts to 1; 2 != 1, so it's false (a classic gotcha)." }
      ]
    },
    {
      id: "control-flow",
      title: "Control Flow & Loops",
      tag: "MCQ",
      html: `
        <ul>
          <li><b>if / else if / else</b> — same as other languages.</li>
          <li><b>switch case</b> — compares with <b>=== (strict, includes type)</b>. No <code>break</code> → <b>falls through</b> to following cases.</li>
          <li><b>for / while / do-while</b> — same as C++; use <code>let</code> instead of <code>int</code>. <b>do-while</b> runs the body once first.</li>
        </ul>
        <h3>Pre vs post increment</h3>
        <pre data-run><code>let x = 5;
console.log(x++);  // prints 5, then x becomes 6
console.log(++x);  // x becomes 7, prints 7</code></pre>
      `,
      quiz: [
        { q: "switch-case in JS compares using…", options: ["==", "===", "!=", "no comparison"], answer: 1, explain: "switch uses strict === comparison (value and type)." },
        { q: "A switch case with no break will…", options: ["Throw an error", "Stop immediately", "Fall through to following cases", "Skip all cases"], answer: 2, explain: "Without break, execution falls through to the next cases." }
      ]
    },
    {
      id: "builtins",
      title: "Built-in Functions",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Function</th><th>Does</th></tr>
        <tr><td><code>Math.random()</code></td><td>Random 0 to 1 (1 exclusive)</td></tr>
        <tr><td><code>new Date()</code></td><td>Create a date</td></tr>
        <tr><td><code>str.toUpperCase()/toLowerCase()</code></td><td>Change case</td></tr>
        <tr><td><code>Number("123")</code></td><td>String → number (<code>Number("abc")</code> → NaN)</td></tr>
        <tr><td><code>String(123)</code></td><td>Number → string</td></tr>
        <tr><td><code>JSON.stringify(obj)</code></td><td>Object → string (JSON = JavaScript Object Notation)</td></tr>
        <tr><td><code>str.indexOf("l")</code></td><td>Position; first match; <b>-1</b> if not found</td></tr>
        <tr><td><code>str.includes("he")</code></td><td>Exists? → true/false</td></tr></table>
        <pre data-run><code>console.log("Hello".indexOf("l"));    // 2
console.log("Hello".includes("ell")); // true
console.log("Hello".indexOf("z"));    // -1</code></pre>
      `,
      quiz: [
        { q: "indexOf returns what if the character is NOT found?", options: ["0", "null", "-1", "false"], answer: 2, explain: "indexOf returns -1 when not found; includes returns true/false." }
      ]
    },
    {
      id: "functions",
      title: "Functions",
      tag: "MCQ",
      html: `
        <pre><code>// Normal function
function showAlert(name) { return "Hi " + name; }

// Stored in a variable
const showAlert = function(name) { ... };

// Arrow function (no 'function' keyword, has =>)
const showAlert = (name) => { ... };</code></pre>
        <p><b>Arrow function</b> uses <code>=&gt;</code>. <b>Normal function</b> uses the <code>function</code> keyword. For the midterm, just recognize both.</p>
      `,
      quiz: [
        { q: "Which is an arrow function?", options: ["function f(){}", "const f = function(){}", "const f = () => {}", "f: function(){}"], answer: 2, explain: "Arrow functions use => and omit the function keyword." }
      ]
    },
    {
      id: "dom",
      title: "The DOM",
      tag: "EXAM-KEY",
      html: `
        <p>When the browser loads HTML, it <b>parses</b> it into a <b>tree</b> of nodes. That tree = the <b>DOM</b>.</p>
        <ul>
          <li>Each element = a <b>node</b>; each node has <b>properties</b> (textContent, style.backgroundColor…).</li>
          <li><b>DOM = Document Object Model</b> ⚠️ Document, not "Dynamic."</li>
          <li>DOM = a data structure (tree) + an <b>API</b> (bridge between JS and HTML).</li>
          <li>JavaScript changes HTML <b>through the DOM</b>.</li>
        </ul>
        <div class="note"><b>Output methods (MCQ):</b> <code>alert()</code>, <code>console.log()</code>, <code>document.write()</code> (old), <code>innerHTML</code> (used a lot).</div>
      `,
      quiz: [
        { q: "DOM stands for…", options: ["Dynamic Object Model", "Document Object Model", "Data Oriented Markup", "Document Output Model"], answer: 1, explain: "DOM = Document Object Model (Document, not Dynamic)." }
      ]
    },
    {
      id: "dom-ops",
      title: "DOM Manipulation — 6 Core Operations",
      tag: "CODE",
      html: `
        <p>Code questions are <b>mandatory</b> on these six. Practice typing them.</p>
        <h3>1. Select an element</h3>
        <pre><code>const title = document.getElementById("title");   // by id
const el = document.querySelector(".myClass");      // by CSS selector</code></pre>
        <h3>2. Change text — textContent vs innerHTML</h3>
        <pre><code>title.textContent = "New title";              // plain text only
title.innerHTML = "New &lt;i&gt;italic&lt;/i&gt; title";  // renders HTML</code></pre>
        <p><b>textContent</b> shows tags literally; <b>innerHTML</b> renders them.</p>
        <h3>3. Add an event listener</h3>
        <pre><code>const btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  title.textContent = "Changed!";
});</code></pre>
        <h3>4 + 5. Create & append</h3>
        <pre><code>const div = document.createElement("div");
div.id = "dynamicDiv";
div.style.backgroundColor = "orange";   // camelCase! not background-color
div.style.height = "200px";
div.innerHTML = "&lt;p&gt;Created div&lt;/p&gt;";
document.body.appendChild(div);</code></pre>
        <div class="note warn"><b>camelCase rule:</b> getElementById, addEventListener, textContent, innerHTML, createElement, appendChild, backgroundColor.</div>
      `,
      quiz: [
        { q: "Which renders HTML tags inside an element?", options: ["textContent", "innerHTML", "innerText", "value"], answer: 1, explain: "innerHTML renders tags; textContent treats them as plain text." },
        { q: "In JS, the CSS property background-color is written as…", options: ["background-color", "backgroundColor", "background_color", "BackgroundColor"], answer: 1, explain: "JS uses camelCase: style.backgroundColor." }
      ]
    },
    {
      id: "forms",
      title: "Form Validation (code)",
      tag: "CODE",
      html: `
        <p>The instructor said code questions come from forms. This is the pattern:</p>
        <pre><code>const form1 = document.getElementById("form1");

form1.addEventListener("submit", function(event) {
  event.preventDefault();   // stop the page reloading

  const fullName  = form1.fullName.value;   // read via name + .value
  const email     = form1.email.value;
  const password  = form1.password.value;
  const age       = form1.age.value;
  const subscribe = form1.subscribe.checked; // checkbox uses .checked

  if (fullName === "" || email === "" || password === "") {
    alert("Invalid"); return;               // return stops on error
  }
  if (password.length &lt; 8) {
    alert("Password too short"); return;
  }
  const ageNum = Number(age);               // inputs are strings -> convert
  if (typeof ageNum !== "number") { alert("Age must be a number"); return; }

  if (!email.includes("@") || !email.includes(".") ||
      email.indexOf("@") &gt; email.indexOf(".")) {
    alert("Invalid email"); return;
  }
  alert("Form submitted");                  // only if nothing returned
});</code></pre>
        <div class="note warn"><b>Must remember:</b> <code>event.preventDefault()</code> stops reload · read inputs via <b>name + .value</b> · <b>checkbox uses .checked</b> · inputs are strings (use <code>Number()</code>) · <code>return</code> on each error.</div>
        <h3>Form 2 — connect via HTML</h3>
        <pre><code>&lt;form onsubmit="submitForm(event)"&gt;  &lt;!-- HTML --&gt;</code></pre>
        <pre><code>function submitForm(event) {
  event.preventDefault();
  const form2 = event.target;   // get the form via event.target
  const userName = form2.userName.value;
}</code></pre>
      `,
      quiz: [
        { q: "What stops a form from reloading the page on submit?", options: ["return false only", "event.preventDefault()", "stopReload()", "event.stop()"], answer: 1, explain: "event.preventDefault() prevents the default submit/reload." },
        { q: "To read a checkbox's state you use…", options: [".value", ".checked", ".selected", ".on"], answer: 1, explain: "Checkboxes use .checked (true/false), not .value." }
      ]
    },
    {
      id: "arrays",
      title: "Arrays & Methods",
      tag: "MCQ",
      html: `
        <ul>
          <li>No fixed size, no fixed type — can mix int, string, object.</li>
          <li><b>const array:</b> can't reassign the whole array, but CAN change elements.</li>
          <li><code>typeof array</code> → <b>"object"</b>.</li>
        </ul>
        <table class="t"><tr><th>Method</th><th>Does</th></tr>
        <tr><td><code>.map(fn)</code></td><td>Runs fn on each element → new array</td></tr>
        <tr><td><code>.filter(fn)</code></td><td>Keeps elements matching a condition</td></tr>
        <tr><td><code>.forEach(fn)</code></td><td>Runs fn for each element</td></tr>
        <tr><td><code>.join("-")</code></td><td>Joins into a string with a separator</td></tr>
        <tr><td><code>.push()</code> / <code>.pop()</code></td><td>Add / remove at the <b>end</b></td></tr>
        <tr><td><code>.unshift()</code> / <code>.shift()</code></td><td>Add / remove at the <b>start</b></td></tr></table>
        <pre data-run><code>const nums = [1, 2, 3, 4];
console.log(nums.filter(function(n){ return n % 2 === 0; })); // [2,4]
console.log(nums.map(function(n){ return n + 2; }));          // [3,4,5,6]
console.log(nums.join("-"));                                  // "1-2-3-4"</code></pre>
        <div class="hook"><b>Hook:</b> push/pop work at the back; shift/unshift at the front.</div>
      `,
      quiz: [
        { q: "Which adds an element to the END of an array?", options: [".shift()", ".unshift()", ".push()", ".pop()"], answer: 2, explain: "push adds to the end; pop removes from the end." },
        { q: ".filter() returns…", options: ["The first match", "A new array of matching elements", "true/false", "The array length"], answer: 1, explain: "filter returns a new array of elements that pass the condition." }
      ]
    }
  ]
};
