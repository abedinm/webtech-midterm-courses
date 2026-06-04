window.COURSES = window.COURSES || {};
window.COURSES["html"] = {
  id: "html",
  title: "HTML",
  subtitle: "Structure & content — the biggest chunk of the exam, mostly forms.",
  color: "#e8643c",
  icon: "&lt;/&gt;",
  topics: [
    {
      id: "what-is-html",
      title: "What HTML Is",
      tag: "EXAM-KEY",
      html: `
        <p><b>Full name: HyperText Markup Language.</b> It is <b>not a programming language</b> — it's a <b>markup language</b> (like XML and Markdown). You "mark up" text with tags to give it structure and meaning.</p>
        <h3>3 jobs, 3 languages</h3>
        <table class="t"><tr><th>Step</th><th>Job</th><th>Language</th></tr>
        <tr><td>1</td><td>Add content (buttons, text, fields)</td><td><b>HTML</b></td></tr>
        <tr><td>2</td><td>Design it (colours, fonts)</td><td>CSS</td></tr>
        <tr><td>3</td><td>Programming (validation, events)</td><td>JavaScript</td></tr></table>
        <p><b>Why not a programming language?</b> No if/else, no loops in HTML. To show 100 products you can't loop in HTML — you need JavaScript.</p>
        <ul>
          <li>An HTML file = any name + <code>.html</code>. Double-click → opens in the browser.</li>
          <li><b>No compiler needed</b> — the browser has the rendering engine built in.</li>
          <li>Invented by <b>Tim Berners-Lee</b>.</li>
          <li><b>HTML is case-insensitive</b>: <code>&lt;TITLE&gt;</code> = <code>&lt;title&gt;</code>.</li>
        </ul>
      `,
      quiz: [
        { q: "HTML is a…", options: ["Programming language", "Markup language", "Scripting language", "Compiled language"], answer: 1, explain: "HTML is a markup language — it describes structure, with no logic or loops." },
        { q: "Why can't you build a for-loop in HTML?", options: ["It's too slow", "HTML has no programming logic", "Browsers block it", "You need a license"], answer: 1, explain: "HTML only describes structure; logic/loops require JavaScript." }
      ]
    },
    {
      id: "element-tag-attr",
      title: "Elements, Tags & Attributes",
      tag: "EXAM-KEY",
      html: `
        <p><b>Element = every piece of content on a page</b> (a button, an input, a header). A page is built from many elements.</p>
        <h3>Two kinds of elements</h3>
        <ol>
          <li><b>With opening + closing tag + content:</b> <code>&lt;button&gt;Click me&lt;/button&gt;</code></li>
          <li><b>Self-closing / void (no closing tag):</b> <code>&lt;input&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;img&gt;</code></li>
        </ol>
        <p><b>Attribute = extra info, written as name="value", ONLY in the opening tag.</b></p>
        <pre><code>&lt;input type="text"&gt;          &lt;!-- type = name, "text" = value --&gt;
&lt;a href="https://google.com"&gt;Click&lt;/a&gt;</code></pre>
        <div class="hook"><b>Picture it:</b> an element is a sandwich — opening tag = top bread, closing tag = bottom bread, content = filling, attributes = labels on the top bread.</div>
      `,
      quiz: [
        { q: "An attribute is written…", options: ["In the closing tag", "In the opening tag as name=value", "Between tags as content", "Anywhere"], answer: 1, explain: "Attributes go in the opening tag only, as name=\"value\" pairs." },
        { q: "Which is a self-closing (void) element?", options: ["<p>", "<button>", "<img>", "<div>"], answer: 2, explain: "<img> has no closing tag (also <br>, <hr>, <input>)." }
      ]
    },
    {
      id: "structure",
      title: "Document Structure",
      tag: "EXAM-KEY",
      html: `
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;This is a web page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- visible content here --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        <table class="t"><tr><th>Tag</th><th>Meaning</th></tr>
        <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Declares HTML (latest version); helps the browser render</td></tr>
        <tr><td><code>&lt;html&gt;</code></td><td>Root element — holds everything</td></tr>
        <tr><td><code>&lt;head&gt;</code></td><td>Metadata + links + title (info <i>about</i> the page, not visible)</td></tr>
        <tr><td><code>&lt;body&gt;</code></td><td>The actual visible content</td></tr></table>
        <div class="hook"><b>Hook:</b> a person — <code>&lt;head&gt;</code> = brain (info nobody sees), <code>&lt;body&gt;</code> = body (everyone sees).</div>
      `,
      quiz: [
        { q: "Which tag holds the visible page content?", options: ["<head>", "<title>", "<body>", "<meta>"], answer: 2, explain: "<body> holds visible content; <head> holds metadata." }
      ]
    },
    {
      id: "common-tags",
      title: "Common Tags",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Tag</th><th>Does</th></tr>
        <tr><td><code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code></td><td>Headings (h1 biggest → h6 smallest)</td></tr>
        <tr><td><code>&lt;p&gt;</code></td><td>Paragraph</td></tr>
        <tr><td><code>&lt;a href="..."&gt;</code></td><td>Anchor — hyperlink</td></tr>
        <tr><td><code>&lt;hr&gt;</code></td><td>Horizontal line (self-closing)</td></tr>
        <tr><td><code>&lt;br&gt;</code></td><td>Line break (self-closing)</td></tr>
        <tr><td><code>&lt;img src alt&gt;</code></td><td>Image (self-closing)</td></tr></table>
        <p><b>Image attributes:</b> <code>src</code> = file name/location; <code>alt</code> = alternative text shown if the image fails (also good for SEO/accessibility).</p>
      `,
      quiz: [
        { q: "The alt attribute on an image…", options: ["Sets the width", "Shows text if the image fails + helps SEO", "Links to a page", "Changes colour"], answer: 1, explain: "alt = alternative text shown when the image can't load; good for SEO/accessibility." }
      ]
    },
    {
      id: "global-attrs",
      title: "Global vs Specific Attributes",
      tag: "MCQ",
      html: `
        <ul>
          <li><b>Global</b> = works on almost any element. Example: <code>class</code>.</li>
          <li><b>Specific</b> = works only on certain elements. Example: <code>href</code> (works on <code>&lt;a&gt;</code>, not on <code>&lt;p&gt;</code>).</li>
          <li>Some attributes need no value: <code>disabled</code> (<code>&lt;button disabled&gt;</code>).</li>
        </ul>
      `,
      quiz: [
        { q: "Which is a GLOBAL attribute (works on almost any element)?", options: ["href", "src", "class", "type"], answer: 2, explain: "class is global; href/src/type are specific to certain elements." }
      ]
    },
    {
      id: "tables",
      title: "Tables",
      tag: "MCQ",
      html: `
        <pre><code>&lt;table border="1"&gt;
  &lt;tr&gt; &lt;th&gt;Name&lt;/th&gt; &lt;th&gt;Month&lt;/th&gt; &lt;/tr&gt;
  &lt;tr&gt; &lt;td&gt;Jan&lt;/td&gt;  &lt;td&gt;...&lt;/td&gt;   &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        <table class="t"><tr><th>Tag/attr</th><th>Meaning</th></tr>
        <tr><td><code>&lt;tr&gt;</code></td><td>Table Row</td></tr>
        <tr><td><code>&lt;th&gt;</code></td><td>Table Header cell</td></tr>
        <tr><td><code>&lt;td&gt;</code></td><td>Table Data cell</td></tr>
        <tr><td><code>colspan="2"</code></td><td>One cell spans 2 columns</td></tr>
        <tr><td><code>rowspan="2"</code></td><td>One cell spans 2 rows</td></tr></table>
        <p>Comment: <code>&lt;!-- ... --&gt;</code>. Semantic table tags: <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>.</p>
      `,
      quiz: [
        { q: "To make one cell as wide as two columns, use…", options: ["rowspan='2'", "colspan='2'", "width='2'", "merge='2'"], answer: 1, explain: "colspan spans columns (width); rowspan spans rows (height)." }
      ]
    },
    {
      id: "semantic",
      title: "Semantic vs Non-Semantic",
      tag: "SHORT Q",
      html: `
        <ul>
          <li><b>Semantic</b> = the tag name tells its meaning: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;thead&gt;</code>.</li>
          <li><b>Non-semantic</b> = name tells you nothing: <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>.</li>
        </ul>
        <p><code>&lt;div&gt;</code> and <code>&lt;section&gt;</code> behave the same (both containers), but <code>&lt;section&gt;</code> <i>means</i> "a section," while <code>&lt;div&gt;</code> means nothing.</p>
        <div class="hook"><b>Hook:</b> <code>&lt;nav&gt;</code> <i>says</i> "I'm navigation." <code>&lt;div&gt;</code> says nothing.</div>
      `,
      quiz: [
        { q: "Which is a NON-semantic element?", options: ["<nav>", "<footer>", "<div>", "<article>"], answer: 2, explain: "<div> is a generic, non-semantic container." }
      ]
    },
    {
      id: "lists",
      title: "Lists",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Tag</th><th>Meaning</th><th>type options</th></tr>
        <tr><td><code>&lt;ul&gt;</code></td><td>Unordered (bullets)</td><td>disc (default), square, circle</td></tr>
        <tr><td><code>&lt;ol&gt;</code></td><td>Ordered (numbers)</td><td>A, a, I, i</td></tr>
        <tr><td><code>&lt;li&gt;</code></td><td>List Item</td><td>—</td></tr></table>
      `,
      quiz: [
        { q: "How do you make square bullets?", options: ["<ul type='square'>", "<ul shape='square'>", "<ol type='square'>", "<li square>"], answer: 0, explain: "<ul type=\"square\"> sets square bullets." }
      ]
    },
    {
      id: "forms",
      title: "Forms (the #1 exam topic)",
      tag: "EXAM-KEY",
      html: `
        <p>The repeating pattern for most fields = <b>label + input</b>:</p>
        <pre><code>&lt;label&gt;First Name&lt;/label&gt;
&lt;input type="text" name="fname"&gt;
&lt;br&gt;&lt;br&gt;</code></pre>
        <p><b>name attribute is required for form handling</b> — the server uses it to grab a field's data.</p>
        <p><b>Input types:</b> text, password (dots), email, date (calendar), number, radio, checkbox, file, hidden, submit.</p>
        <h3>Special cases</h3>
        <p><b>Radio buttons</b> — same <code>name</code> = one group (only one selectable); each needs a <code>value</code>:</p>
        <pre><code>&lt;input type="radio" name="gender" value="male"&gt; Male
&lt;input type="radio" name="gender" value="female"&gt; Female</code></pre>
        <p><b>Dropdown</b> — <code>&lt;select&gt;</code> + <code>&lt;option&gt;</code>; first option a placeholder with no value:</p>
        <pre><code>&lt;select name="age"&gt;
  &lt;option value=""&gt;Select&lt;/option&gt;
  &lt;option value="0-18"&gt;0 to 18&lt;/option&gt;
&lt;/select&gt;</code></pre>
        <p><b>Textarea</b> (multi-line, rows/cols), <b>checkbox</b> (needs value), <b>submit</b> via <code>&lt;input type="submit"&gt;</code>.</p>
      `,
      quiz: [
        { q: "Why must form inputs have a name attribute?", options: ["For styling", "So the server can read their values", "To set the width", "It's optional decoration"], answer: 1, explain: "The server uses the name attribute to access each field's submitted value." },
        { q: "Two radio buttons become one mutually-exclusive group when they share the same…", options: ["id", "value", "name", "type"], answer: 2, explain: "Same name = same radio group, so only one can be selected." }
      ]
    },
    {
      id: "get-post",
      title: "GET vs POST",
      tag: "EXAM-KEY",
      html: `
        <table class="t"><tr><th>Feature</th><th>GET</th><th>POST</th></tr>
        <tr><td>Data location</td><td><b>Visible in URL</b></td><td>Hidden (request body)</td></tr>
        <tr><td>History</td><td>Saved</td><td>Not saved</td></tr>
        <tr><td>Max length</td><td>~<b>2048 chars</b></td><td>No limit</td></tr>
        <tr><td>Cacheable</td><td>Yes</td><td>No</td></tr>
        <tr><td>Reload/Back</td><td>Harmless</td><td><b>Resubmits data</b></td></tr>
        <tr><td>Security</td><td>Not secure</td><td>More secure</td></tr></table>
        <div class="hook"><b>Hook:</b> <b>G</b>ET = data <b>G</b>oes in the address bar (visible, small). <b>P</b>OST = <b>P</b>rivate (hidden, big, secure).</div>
        <p>Default is GET. Set <code>&lt;form method="post"&gt;</code> to use POST.</p>
      `,
      quiz: [
        { q: "Which method shows submitted data in the URL?", options: ["POST", "GET", "PUT", "DELETE"], answer: 1, explain: "GET appends data to the URL (visible); POST hides it in the body." },
        { q: "For a large or sensitive form (e.g. password), use…", options: ["GET", "POST", "Either", "Neither"], answer: 1, explain: "POST has no size limit and keeps data out of the URL." }
      ]
    },
    {
      id: "enctype-attrs",
      title: "Encoding & Key Attributes",
      tag: "MCQ",
      html: `
        <h3>Encoding type (enctype)</h3>
        <table class="t"><tr><th>Value</th><th>Use</th></tr>
        <tr><td><code>application/x-www-form-urlencoded</code></td><td><b>Default</b> — ~plain text</td></tr>
        <tr><td><code>multipart/form-data</code></td><td><b>File uploads</b></td></tr></table>
        <h3>Key attributes</h3>
        <table class="t"><tr><th>Attribute</th><th>Job</th></tr>
        <tr><td><code>action</code></td><td>URL the form submits to</td></tr>
        <tr><td><code>method</code></td><td>GET or POST</td></tr>
        <tr><td><code>id</code></td><td>Uniquely identify an element (for CSS/JS)</td></tr>
        <tr><td><code>target</code></td><td><code>_blank</code> = new tab; <code>_self</code> = same tab (default)</td></tr>
        <tr><td><code>autocomplete</code></td><td>on/off suggestions</td></tr>
        <tr><td><code>novalidate</code></td><td>Stops browser validation</td></tr></table>
        <div class="hook"><b>Hook:</b> uploading a <b>file</b>? → <b>multi</b>part. Otherwise → default url-encoded.</div>
      `,
      quiz: [
        { q: "To upload a file, the form enctype must be…", options: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain", "application/json"], answer: 1, explain: "File uploads require multipart/form-data." },
        { q: "target='_blank' opens the link in…", options: ["The same tab", "A new tab/window", "A popup only", "The parent frame"], answer: 1, explain: "_blank = new tab; _self (default) = same tab." }
      ]
    },
    {
      id: "id-vs-name",
      title: "id vs name",
      tag: "SHORT Q",
      html: `
        <table class="t"><tr><th></th><th>id</th><th>name</th></tr>
        <tr><td>Purpose</td><td><b>Uniquely identify</b> one element</td><td><b>Form data handling</b></td></tr>
        <tr><td>Used by</td><td>CSS / JavaScript</td><td>The server</td></tr>
        <tr><td>Uniqueness</td><td>Must be unique</td><td>Can repeat (radio group)</td></tr></table>
        <div class="hook"><b>Analogy:</b> id = your unique student ID (find/control exactly you). name = how a form groups/sends data.</div>
      `,
      quiz: [
        { q: "Which attribute must be unique on a page?", options: ["name", "id", "class", "type"], answer: 1, explain: "id must be unique; name can repeat (e.g. radio groups)." }
      ]
    },
    {
      id: "inline-block",
      title: "Inline vs Block Elements",
      tag: "SHORT Q",
      html: `
        <table class="t"><tr><th></th><th>Block</th><th>Inline</th></tr>
        <tr><td>Width</td><td>Takes the <b>whole line</b></td><td>Only as wide as its content</td></tr>
        <tr><td>New line?</td><td>Forces a new line</td><td>Stays in the same line</td></tr>
        <tr><td>Examples</td><td><code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;form&gt;</code>, <code>&lt;div&gt;</code></td><td><code>&lt;img&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code></td></tr></table>
        <p>That's why form inputs sit side-by-side (inline) until you add <code>&lt;br&gt;</code>.</p>
      `,
      quiz: [
        { q: "Which is a BLOCK element?", options: ["<span>", "<a>", "<p>", "<img>"], answer: 2, explain: "<p> is block (takes the whole line); span/a/img are inline." }
      ]
    },
    {
      id: "xml-family",
      title: "XML, XHTML, DHTML",
      tag: "MCQ",
      html: `
        <h3>XML — Extensible Markup Language</h3>
        <ul>
          <li>For <b>storing and transporting</b> data (NOT displaying it)</li>
          <li>Tags are <b>not predefined</b> — you define your own</li>
          <li>A <b>W3C recommendation</b>; tree-like, self-descriptive</li>
        </ul>
        <h3>XHTML — Extensible HyperText Markup Language</h3>
        <p>A <b>combination of XML + HTML</b>; a <b>stricter</b> HTML that must be well-formed.</p>
        <h3>DHTML — Dynamic HTML</h3>
        <p><b>HTML + JavaScript</b> together → an interactive/dynamic page.</p>
      `,
      quiz: [
        { q: "XML is mainly used to…", options: ["Display styled pages", "Store and transport data", "Run loops", "Replace CSS"], answer: 1, explain: "XML stores/transports data; its tags are user-defined, not for display." },
        { q: "XHTML is best described as…", options: ["HTML + CSS", "A stricter HTML combining XML + HTML", "A database", "A server"], answer: 1, explain: "XHTML = XML + HTML, stricter and must be well-formed." }
      ]
    },
    {
      id: "dom",
      title: "DOM — Document Object Model",
      tag: "EXAM-KEY",
      html: `
        <p>When the browser loads HTML, it <b>parses</b> it into a <b>tree</b> of nodes (parent → child). That tree is the <b>DOM</b>.</p>
        <pre><code>html  (root)
└── body
    └── div
        └── ul
            ├── li
            └── li</code></pre>
        <ul>
          <li>Each element = a <b>node</b>; nodes form the <b>DOM tree</b>.</li>
          <li><b>DOM = Document Object Model</b> ⚠️ first word is <b>Document</b>, not "Dynamic."</li>
          <li>JavaScript modifies HTML <b>through the DOM</b> — it's the bridge between JS and HTML.</li>
        </ul>
      `,
      quiz: [
        { q: "DOM stands for…", options: ["Dynamic Object Model", "Document Object Model", "Data Object Map", "Document Oriented Markup"], answer: 1, explain: "DOM = Document Object Model (Document, not Dynamic)." }
      ]
    },
    {
      id: "text-tags",
      title: "Text Formatting & Other Tags",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Tag</th><th>Effect</th></tr>
        <tr><td><code>&lt;i&gt;</code></td><td>Italic</td></tr>
        <tr><td><code>&lt;strong&gt;</code>/<code>&lt;b&gt;</code></td><td>Bold</td></tr>
        <tr><td><code>&lt;u&gt;</code></td><td>Underline</td></tr>
        <tr><td><code>&lt;sub&gt;</code></td><td>Subscript (lowered)</td></tr>
        <tr><td><code>&lt;sup&gt;</code></td><td>Superscript (raised)</td></tr>
        <tr><td><code>&lt;script&gt;</code></td><td>Adds JavaScript</td></tr>
        <tr><td><code>&lt;style&gt;</code></td><td>Adds CSS</td></tr>
        <tr><td><code>&lt;iframe&gt;</code></td><td>Embeds Google Maps, YouTube videos</td></tr></table>
      `,
      quiz: [
        { q: "Which tag embeds a YouTube video or Google Map?", options: ["<embed-video>", "<iframe>", "<media>", "<frame>"], answer: 1, explain: "<iframe> embeds external media like maps and videos." }
      ]
    }
  ]
};
