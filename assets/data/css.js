window.COURSES = window.COURSES || {};
window.COURSES["css"] = {
  id: "css",
  title: "CSS",
  subtitle: "Styling — exam is MCQ + 4 short-question topics (selectors, box model, position).",
  color: "#2aa9e0",
  icon: "❉",
  topics: [
    {
      id: "what-is-css",
      title: "What CSS Is",
      tag: "MCQ",
      html: `
        <p><b>Full name: Cascading Style Sheets.</b> HTML gives structure + basic text formatting; <b>CSS designs the page properly</b> (colours, fonts, spacing, layout, hide/show, position).</p>
        <div class="hook"><b>Picture it:</b> HTML is the skeleton; CSS is the skin, hair and clothes.</div>
        <div class="note warn"><b>Exam note:</b> CSS questions are <b>MCQ + short answer only</b> — no code-writing or output-tracing. The short-question topics are: inline/block, <b>CSS selectors</b>, <b>box model</b>, <b>position</b>.</div>
      `,
      quiz: [
        { q: "CSS stands for…", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Coded Style Sheets"], answer: 1, explain: "CSS = Cascading Style Sheets." }
      ]
    },
    {
      id: "syntax",
      title: "CSS Syntax",
      tag: "MCQ",
      html: `
        <pre><code>selector {
  property: value;   /* colon in the middle, semicolon at the end */
}</code></pre>
        <pre><code>h1 {
  color: blue;
  font-size: 34px;
}</code></pre>
        <ul>
          <li><b>Selector</b> = <i>who</i> you're styling.</li>
          <li><b>Declaration</b> = <code>property: value;</code> = <i>what</i> design you apply.</li>
        </ul>
      `,
      quiz: [
        { q: "In a CSS rule, the part before the { } is the…", options: ["Property", "Value", "Selector", "Declaration"], answer: 2, explain: "The selector chooses what to style; declarations go inside { }." }
      ]
    },
    {
      id: "properties",
      title: "Common Properties (+ traps)",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Property</th><th>Does</th></tr>
        <tr><td><code>color</code></td><td>Font colour — <b>no such thing as font-color</b> (trap)</td></tr>
        <tr><td><code>font-size</code> / <code>font-weight</code> / <code>font-family</code></td><td>Text size / thickness / font</td></tr>
        <tr><td><code>text-align</code></td><td>left/right/center — <b>not</b> font-alignment (trap)</td></tr>
        <tr><td><code>text-decoration</code></td><td>underline, line-through</td></tr>
        <tr><td><code>height/width</code>, <code>max/min-width</code></td><td>Sizing limits</td></tr>
        <tr><td><code>background-color</code></td><td>Background</td></tr>
        <tr><td><code>border</code></td><td>e.g. <code>solid 10px red</code> (types: solid, dashed…)</td></tr>
        <tr><td><code>border-radius</code></td><td>Curve the corners</td></tr>
        <tr><td><code>visibility</code></td><td>hidden / visible (hidden still reserves space)</td></tr></table>
        <p>Two-word properties use a <b>hyphen</b> and are <b>lowercase</b>. max = the biggest it can get; min = it can't get smaller than this.</p>
      `,
      quiz: [
        { q: "Which is the CORRECT property to change text colour?", options: ["font-color", "text-color", "color", "foreground"], answer: 2, explain: "It's just `color`. There is no `font-color` in CSS." },
        { q: "Which centers text?", options: ["font-alignment: center", "align: center", "text-align: center", "center: text"], answer: 2, explain: "text-align: center. There is no font-alignment property." }
      ]
    },
    {
      id: "zindex",
      title: "z-index (Layering)",
      tag: "MCQ",
      html: `
        <ul>
          <li>Controls which overlapping element sits <b>in front</b>.</li>
          <li><b>Default z-index = 0.</b> Higher = front, lower = back. Ties → later one wins.</li>
          <li>Requires a <code>position</code> value to work.</li>
        </ul>
        <div class="hook"><b>Hook:</b> z-index = stack-of-paper order; bigger number = closer to your face.</div>
      `,
      quiz: [
        { q: "An element with higher z-index appears…", options: ["Behind others", "In front of others", "Hidden", "Smaller"], answer: 1, explain: "Higher z-index = in front. Default is 0." }
      ]
    },
    {
      id: "selectors",
      title: "Selectors — 5 Categories",
      tag: "SHORT Q",
      html: `
        <h3>1. Simple selectors</h3>
        <table class="t"><tr><th>Selector</th><th>Symbol</th><th>Selects</th></tr>
        <tr><td>Element</td><td><code>p { }</code></td><td>all &lt;p&gt;</td></tr>
        <tr><td>ID</td><td><code>#unique { }</code></td><td>one element (unique, hash, one only)</td></tr>
        <tr><td>Class</td><td><code>.box { }</code></td><td>a group (dot, reusable)</td></tr></table>
        <h3>2. Combinator</h3><p><code>div p { }</code> styles &lt;p&gt; inside a &lt;div&gt;.</p>
        <h3>3. Pseudo-class</h3><p><b>single colon</b>, styles a state: <code>button:hover { }</code></p>
        <h3>4. Pseudo-element</h3><p><b>double colon</b>, styles a part: <code>p::first-letter</code>, <code>::before</code>, <code>::after</code></p>
        <h3>5. Special</h3>
        <ul><li><b>Universal</b> <code>* { }</code> — everything</li>
        <li><b>Grouping</b> <code>p, span, button { }</code> — same style on multiple</li></ul>
        <p>Also: <b>attribute selector</b> <code>input[type="text"]</code>; <b>nth-child</b> <code>li:nth-child(odd)</code>.</p>
        <div class="hook"><b>Hook:</b> <code>#</code> = ID (the specific #1). <code>.</code> = class. single colon = pseudo-<b>class</b> (state). double colon = pseudo-<b>element</b> (a part).</div>
      `,
      quiz: [
        { q: "Which symbol selects by ID?", options: [". (dot)", "# (hash)", "* (star)", ": (colon)"], answer: 1, explain: "# selects an ID; . selects a class." },
        { q: "button:hover is which kind of selector?", options: ["Pseudo-element", "Pseudo-class", "Universal", "Attribute"], answer: 1, explain: "Single colon = pseudo-class (a state like hover)." }
      ]
    },
    {
      id: "box-model",
      title: "Box Model",
      tag: "EXAM-KEY",
      html: `
        <p>Every element is a box with 4 layers, inside → out:</p>
        <pre><code>margin   (space OUTSIDE — distance from other elements)
  border (the edge line)
    padding (space INSIDE — between content & border)
      content (the text/image)</code></pre>
        <ul>
          <li><b>Padding</b> = space between content and border.</li>
          <li><b>Margin</b> = space between this element and other elements.</li>
        </ul>
        <h3>Size calculation (ignore margin)</h3>
        <pre><code>total width  = width  + left/right padding + left/right border
total height = height + top/bottom padding + top/bottom border</code></pre>
        <p><b>Example:</b> width 320 + padding 10 (×2 = 20) + border 5 (×2 = 10) = <b>350px</b>. (Margin ignored.)</p>
        <h3>Directional values</h3>
        <ul>
          <li><b>1 value</b> → all four sides: <code>padding: 10px;</code></li>
          <li><b>2 values</b> → top/bottom, left/right</li>
          <li><b>4 values</b> → clockwise: top, right, bottom, left</li>
        </ul>
        <p><b>box-sizing: border-box</b> → the width you set IS the total width (no adding padding/border).</p>
      `,
      quiz: [
        { q: "Padding is the space between…", options: ["Two elements", "Content and border", "Border and screen edge", "Margin and body"], answer: 1, explain: "Padding = inside space between content and border. Margin = outside, between elements." },
        { q: "width 200 + padding 10 each side + border 5 each side = total width of…", options: ["200px", "215px", "230px", "250px"], answer: 2, explain: "200 + (10×2) + (5×2) = 230px. Margin is ignored." }
      ]
    },
    {
      id: "position",
      title: "Position Property",
      tag: "SHORT Q",
      html: `
        <table class="t"><tr><th>Position</th><th>Behavior</th></tr>
        <tr><td><code>static</code></td><td>Default. top/left/right/bottom don't work.</td></tr>
        <tr><td><code>relative</code></td><td>Moves relative to its <b>own original position</b>. Keeps its gap reserved.</td></tr>
        <tr><td><code>absolute</code></td><td>Moves relative to its <b>positioned parent</b>. Frees its space; behaves like inline.</td></tr>
        <tr><td><code>fixed</code></td><td><b>Fixed to the screen</b> — doesn't move on scroll.</td></tr>
        <tr><td><code>sticky</code></td><td>Scrolls normally, then <b>sticks</b> at a set point.</td></tr></table>
        <h3>Relative vs Absolute (the 4 differences)</h3>
        <ol>
          <li>Reference: relative → its own position; absolute → its positioned parent.</li>
          <li>Absolute needs a parent with a non-static position.</li>
          <li>Relative <b>reserves</b> its gap; absolute <b>frees</b> the space.</li>
          <li>Relative behaves like block; absolute behaves like inline.</li>
        </ol>
        <div class="hook"><b>Hook:</b> Relative = relative to itself (keeps its seat warm). Absolute = relative to its parent (leaves the room).</div>
      `,
      quiz: [
        { q: "Which position stays put on screen while you scroll?", options: ["static", "relative", "absolute", "fixed"], answer: 3, explain: "fixed is glued to the screen and ignores scrolling." },
        { q: "position: absolute moves an element relative to…", options: ["Its own original spot", "Its positioned parent", "The mouse", "The footer"], answer: 1, explain: "Absolute positions relative to the nearest positioned ancestor and frees its space." }
      ]
    },
    {
      id: "connect-css",
      title: "3 Ways to Connect CSS",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Method</th><th>How</th><th>Note</th></tr>
        <tr><td><b>Internal</b></td><td><code>&lt;style&gt;</code> in <code>&lt;head&gt;</code></td><td>Same file</td></tr>
        <tr><td><b>External</b></td><td><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></td><td><b>Reusable</b> across pages — best</td></tr>
        <tr><td><b>Inline</b></td><td><code>style="..."</code> on the element</td><td>One element only</td></tr></table>
        <p>External is best: one file styles every page (reusable).</p>
      `,
      quiz: [
        { q: "Which CSS method is reusable across many HTML pages?", options: ["Inline", "Internal", "External", "None"], answer: 2, explain: "External CSS (linked .css file) can be reused by linking it to many pages." }
      ]
    },
    {
      id: "specificity",
      title: "Specificity (Which Style Wins)",
      tag: "EXAM-KEY",
      html: `
        <p>When the same element gets styles from multiple places, which wins?</p>
        <p style="font-size:18px"><b>Inline &gt; Internal &gt; External</b></p>
        <ul>
          <li><b>Inline is strongest</b> — overwrites internal and external.</li>
          <li><code>!important</code> overrides everything (use sparingly).</li>
        </ul>
        <div class="hook"><b>Hook:</b> the closer a style is written to the element, the stronger it is. Inline is glued right on → it wins.</div>
      `,
      quiz: [
        { q: "If inline, internal and external all set a colour on one element, which wins?", options: ["External", "Internal", "Inline", "Random"], answer: 2, explain: "Inline has the highest specificity and overrides internal/external." }
      ]
    }
  ]
};
