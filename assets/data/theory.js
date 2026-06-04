window.COURSES = window.COURSES || {};
window.COURSES["theory"] = {
  id: "theory",
  title: "Web & Networking Theory",
  subtitle: "The 15–20 theory marks: client-server, HTTP, URI, DNS and more.",
  color: "#6d8bff",
  icon: "◍",
  topics: [
    {
      id: "client-server",
      title: "Client–Server Model",
      tag: "SHORT Q",
      html: `
        <p><b>Plain English:</b> All the data and services sit in one central place run by an authority — the <b>server</b>. Anyone who wants that data — a <b>client</b> — must <b>send a request</b>, and the server replies with a <b>response</b>.</p>
        <div class="hook"><b>Picture it:</b> a restaurant. You (client) order. The kitchen (server) cooks and sends it out.</div>
        <p><b>Example:</b> You open YouTube. Your laptop sends a request to YouTube's server; the server sends back the app + videos as a response.</p>
        <h3>Client and server can each be a device OR software</h3>
        <ul>
          <li>Your <b>laptop</b> = client device. Your <b>browser</b> = client software.</li>
          <li>The <b>computer</b> hosting YouTube = server device. <b>Apache</b> running on it = server software.</li>
        </ul>
        <h3>Used beyond the web too</h3>
        <p>Databases (your C# app → Microsoft SQL Server), DNS servers, DHCP servers, file servers, email (SMTP) servers.</p>
        <div class="note"><b>Exam-ready:</b> A client-server model is a system where clients send requests to a central server, which processes them and returns responses. Both client and server can be a device or software.</div>
      `,
      quiz: [
        { q: "In the client-server model, what starts the communication?", options: ["The server pushes data", "The client sends a request", "The database broadcasts", "The router decides"], answer: 1, explain: "Clients always initiate by sending a request; the server responds." },
        { q: "A web browser is best described as a…", options: ["Server device", "Server software", "Client software", "Database tier"], answer: 2, explain: "The browser is client software; the laptop running it is the client device." }
      ]
    },
    {
      id: "web-client-server",
      title: "Web Client / Web Server",
      tag: "MCQ",
      html: `
        <p>A <b>web browser</b> (web client) sends an <b>HTTP request</b>. The <b>web server</b> fetches the site's HTML, CSS and JS files and returns them as an <b>HTTP response</b>.</p>
        <ul>
          <li>Web client examples: web browsers.</li>
          <li>Web server software examples: <b>Apache</b>, <b>Nginx</b>.</li>
        </ul>
        <p>Cycle: client sends request → server processes → server returns response.</p>
      `,
      quiz: [
        { q: "Which is web server software?", options: ["Chrome", "Apache", "Windows", "MySQL Workbench"], answer: 1, explain: "Apache (and Nginx) are web server software. Chrome is a client." }
      ]
    },
    {
      id: "three-tier",
      title: "Three-Tier Architecture",
      tag: "SHORT Q",
      html: `
        <p>Split an application into 3 layers (tiers):</p>
        <table class="t"><tr><th>Tier</th><th>What it is</th><th>Side</th></tr>
        <tr><td><b>Presentation</b></td><td>The UI — what you see, the inputs/outputs</td><td>Frontend</td></tr>
        <tr><td><b>Business logic</b></td><td>The control logic / algorithms</td><td>Backend</td></tr>
        <tr><td><b>Data</b></td><td>The database + stored resources</td><td>Backend</td></tr></table>
        <p><b>YouTube example:</b> Presentation = login screen. Business logic = checks login + runs recommendation algorithm. Data tier = the database storing videos.</p>
        <div class="note">Business logic + Data tiers together = the <b>backend / server side</b>. Your data tier = MySQL / SQL Server.</div>
      `,
      quiz: [
        { q: "Which tier holds the database?", options: ["Presentation tier", "Business logic tier", "Data tier", "Network tier"], answer: 2, explain: "The data tier is the database and stored resources." }
      ]
    },
    {
      id: "p2p",
      title: "Peer-to-Peer (P2P) Architecture",
      tag: "SHORT Q",
      html: `
        <p><b>Plain English:</b> <b>No central authority/server</b> — clients talk to each other directly.</p>
        <p>In a video call, sending data to a server first and back would be slow and pointless. Remove the server → the two clients communicate <b>directly</b> → faster.</p>
        <h3>Examples</h3>
        <ul>
          <li><b>Audio/video calls</b> (direct device-to-device)</li>
          <li><b>Torrents</b> — files distributed across many computers; any client can share with another</li>
          <li><b>Web3 / Blockchain</b> — data distributed across all devices; needs <b>encryption</b> for security</li>
        </ul>
        <div class="hook"><b>Key line:</b> In P2P, <b>everyone is both a client and a server</b>.</div>
        <p><b>vs Client-Server:</b> client-server <b>has</b> a central authority; P2P does <b>not</b>.</p>
      `,
      quiz: [
        { q: "The defining difference of P2P vs client-server is:", options: ["P2P is faster always", "P2P has no central authority", "P2P uses HTTP only", "P2P needs no internet"], answer: 1, explain: "P2P has no central server; every node is both client and server." },
        { q: "Which is a P2P example?", options: ["Visiting a website", "BitTorrent file sharing", "Querying SQL Server", "Loading Gmail"], answer: 1, explain: "Torrents distribute files peer-to-peer with no central server." }
      ]
    },
    {
      id: "network-types",
      title: "Network Types: PAN / LAN / MAN / WAN",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Type</th><th>Full name</th><th>Coverage</th><th>Example</th></tr>
        <tr><td><b>PAN</b></td><td>Personal Area Network</td><td>One person's devices</td><td>Phone + earbuds</td></tr>
        <tr><td><b>LAN</b></td><td>Local Area Network</td><td>Home / office</td><td>Home WiFi</td></tr>
        <tr><td><b>MAN</b></td><td>Metropolitan Area Network</td><td>City / large campus</td><td><b>AIUB campus</b></td></tr>
        <tr><td><b>WAN</b></td><td>Wide Area Network</td><td>Country / worldwide</td><td><b>The Internet</b></td></tr></table>
        <div class="hook"><b>Memory hook:</b> P → L → M → W = smallest → biggest. "Please Learn More Wide."</div>
        <p>The Internet = a <b>WAN</b>. It carries the World Wide Web.</p>
      `,
      quiz: [
        { q: "A university campus network is an example of a…", options: ["PAN", "LAN", "MAN", "WAN"], answer: 2, explain: "A city/large-campus network is a MAN (Metropolitan Area Network)." }
      ]
    },
    {
      id: "internet-vs-web",
      title: "Internet vs Web",
      tag: "SHORT Q",
      html: `
        <table class="t"><tr><th></th><th>Internet</th><th>World Wide Web</th></tr>
        <tr><td>What</td><td>Network <b>infrastructure</b> connecting devices</td><td>A <b>service</b> running on the internet</td></tr>
        <tr><td>Role</td><td>The wires/network</td><td>Interlinked content + multimedia (sites, video, audio)</td></tr>
        <tr><td>Analogy</td><td>The roads</td><td>The delivery service using the roads</td></tr></table>
        <div class="note"><b>Exam-ready:</b> The Internet is the network infrastructure; the Web is a service (interlinked multimedia) that runs on top of it. <b>Tim Berners-Lee</b> invented the Web.</div>
      `,
      quiz: [
        { q: "The World Wide Web is best described as…", options: ["The physical network of cables", "A service running on the internet", "The same thing as the internet", "A type of router"], answer: 1, explain: "The Web is a service; the internet is the underlying network infrastructure." }
      ]
    },
    {
      id: "standards",
      title: "Standards Bodies: W3C / IETF / ECMA",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Org</th><th>Full name</th><th>Standardizes</th></tr>
        <tr><td><b>W3C</b></td><td>World Wide Web <b>Consortium</b></td><td>HTML, CSS, DOM</td></tr>
        <tr><td><b>IETF</b></td><td>Internet Engineering Task Force</td><td>HTTP, URI, TCP/IP</td></tr>
        <tr><td><b>ECMA</b></td><td>ECMA International</td><td><b>JavaScript</b></td></tr></table>
        <p>"Standardize" = sets the rules for how a technology behaves. <b>JavaScript's other name = ECMAScript</b> (because ECMA standardizes it).</p>
      `,
      quiz: [
        { q: "Which organization standardizes JavaScript?", options: ["W3C", "IETF", "ECMA International", "IEEE"], answer: 2, explain: "ECMA International standardizes JS — hence the name ECMAScript." },
        { q: "W3C stands for World Wide Web…", options: ["Council", "Consortium", "Committee", "Community"], answer: 1, explain: "W3C = World Wide Web Consortium." }
      ]
    },
    {
      id: "nat",
      title: "NAT — Network Address Translation",
      tag: "MCQ",
      html: `
        <p><b>The "Siam" analogy:</b> you can't have two brothers both named "Siam" in one house — names must be unique within a family. But the house next door can also have a "Siam" — no conflict, because they're separate families.</p>
        <p><b>Apply to IPs:</b> under one router, each device gets a unique <b>private IP</b> (192.168.1.1, .1.2…). A different router can hand out the <b>same</b> private IPs — no conflict.</p>
        <h3>Why use NAT</h3>
        <ul>
          <li><b>Conserves IP addresses</b> — they don't run out; private addresses are reusable across networks</li>
          <li>NAT is a <b>service</b> inside a <b>router or firewall</b></li>
          <li>Enhances <b>security</b></li>
          <li>Mechanism: <b>modifies the IP address in the header of IP packets</b></li>
        </ul>
        <p>Private IP = used within the local network. Public IP = used on the public Internet.</p>
      `,
      quiz: [
        { q: "A main benefit of NAT is…", options: ["Faster CPU", "Conserving/reusing IP addresses", "Bigger screens", "Free WiFi"], answer: 1, explain: "NAT lets private IPs be reused across networks, conserving public addresses." }
      ]
    },
    {
      id: "dns",
      title: "DNS — Domain Name Service",
      tag: "SHORT Q",
      html: `
        <p><b>Plain English:</b> every website has a unique <b>IP address</b>, but humans type <b>domain names</b> (youtube.com). DNS <b>maps the domain name to its IP address</b> so the web server knows which site you want.</p>
        <div class="hook"><b>Picture it:</b> a phonebook. You know the name (youtube.com); DNS looks up the number (the IP).</div>
        <div class="note"><b>Exam-ready:</b> DNS (Domain Name Service) translates a human-readable domain name into the corresponding IP address.</div>
      `,
      quiz: [
        { q: "DNS translates…", options: ["IP → MAC address", "Domain name → IP address", "HTTP → HTTPS", "URL → URN"], answer: 1, explain: "DNS maps a domain name to its IP address." }
      ]
    },
    {
      id: "uri",
      title: "URI — Parts of a Web Address",
      tag: "EXAM-KEY",
      html: `
        <pre><code>https:// www.example.com : 8080 /watch ?v=abc&page=1 #section2
  scheme       domain      port   path   query params   fragment</code></pre>
        <table class="t"><tr><th>Part</th><th>What</th><th>How to spot it</th></tr>
        <tr><td><b>Scheme</b></td><td>Protocol</td><td><code>http</code>/<code>https</code> at the start</td></tr>
        <tr><td><b>Domain</b></td><td>Site address</td><td><code>www.example.com</code></td></tr>
        <tr><td><b>Port</b></td><td>Which port</td><td>number after a <code>:</code> (after domain)</td></tr>
        <tr><td><b>Path</b></td><td>Resource location</td><td>after the <code>/</code></td></tr>
        <tr><td><b>Query</b></td><td>key=value data</td><td>after <code>?</code>, joined by <code>&</code></td></tr>
        <tr><td><b>Fragment</b></td><td>Section of page</td><td>after <code>#</code></td></tr></table>
        <div class="note warn"><b>MCQ trick:</b> "Find the port number" → look for the colon after the domain; the number after it is the port. "Find the query parameter" → look after the <code>?</code> for key=value.</div>
      `,
      quiz: [
        { q: "In https://site.com:8080/page?id=5 — what is 8080?", options: ["The path", "The query parameter", "The port number", "The fragment"], answer: 2, explain: "A number after a colon (after the domain) is the port number." },
        { q: "In ...?v=abc#top — what is 'top'?", options: ["A query parameter", "The fragment", "The scheme", "The path"], answer: 1, explain: "Text after # is the fragment." }
      ]
    },
    {
      id: "url-urn",
      title: "URL vs URN",
      tag: "MCQ",
      html: `
        <p>Both are types of <b>URI</b> (URI is the parent).</p>
        <table class="t"><tr><th></th><th>URL (Locator)</th><th>URN (Name)</th></tr>
        <tr><td>Job</td><td><b>Locates</b> a resource on the web</td><td>Gives a resource a <b>unique name</b> only</td></tr>
        <tr><td>Test</td><td>Paste in a tab → takes you there</td><td>Search it → can't locate the page</td></tr>
        <tr><td>Example</td><td>A YouTube link</td><td>An <b>ISBN</b> (book number)</td></tr></table>
        <div class="hook"><b>Hook:</b> UR<b>L</b> = <b>L</b>ocate (takes you there). UR<b>N</b> = <b>N</b>ame only (identity, no address).</div>
      `,
      quiz: [
        { q: "An ISBN that names a book but can't be used to locate it on the web is a…", options: ["URL", "URN", "URI scheme", "Port"], answer: 1, explain: "URN gives a unique name only; it does not locate the resource." }
      ]
    },
    {
      id: "http",
      title: "HTTP — Stateless Protocol",
      tag: "EXAM-KEY",
      html: `
        <p><b>Plain English:</b> HTTP is the <b>protocol</b> the web client and web server use to communicate. Full name: <b>HyperText Transfer Protocol</b>.</p>
        <h3>Why "stateless / connectionless" (classic short question)</h3>
        <p>Client sends a request → connection <b>established</b> → server sends response → connection <b>immediately closed</b>. Next time, a <b>new</b> request opens a <b>new</b> connection. Because <b>no permanent connection</b> is kept and HTTP <b>remembers nothing</b> about the previous request, it is stateless/connectionless.</p>
        <p><b>Default port = 80.</b></p>
        <h3>Request & Response both have two parts</h3>
        <table class="t"><tr><th>Part</th><th>Contains</th></tr>
        <tr><td><b>Header</b></td><td>name-value pairs: date, server name, content-length</td></tr>
        <tr><td><b>Body</b></td><td>the actual data (the HTML/CSS/JS being returned)</td></tr></table>
        <p>Response also has a <b>status code</b> + <b>status message</b>. Request also has a <b>method</b>, the <b>URL</b>, and the <b>HTTP version</b>.</p>
      `,
      quiz: [
        { q: "HTTP is called 'stateless' because…", options: ["It has no IP", "It keeps no permanent connection / remembers nothing of the previous request", "It only works on LAN", "It needs no server"], answer: 1, explain: "Each request/response opens and closes its own connection; nothing is remembered." },
        { q: "The default port for HTTP is…", options: ["21", "80", "443", "8080"], answer: 1, explain: "HTTP = port 80; HTTPS = port 443." }
      ]
    },
    {
      id: "status-codes",
      title: "HTTP Status Codes",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th>Code</th><th>Meaning</th></tr>
        <tr><td><b>200</b></td><td>OK / Success</td></tr>
        <tr><td><b>201</b></td><td>Created (e.g. registered a user)</td></tr>
        <tr><td><b>400</b></td><td>Bad Request (client error)</td></tr>
        <tr><td><b>401</b></td><td>Unauthorized (not logged in)</td></tr>
        <tr><td><b>404</b></td><td>Not Found</td></tr>
        <tr><td><b>500</b></td><td>Internal Server Error</td></tr></table>
        <div class="hook"><b>Hook:</b> 4xx = <b>your</b> fault (client). 5xx = <b>server's</b> fault. 2xx = success.</div>
      `,
      quiz: [
        { q: "A 404 status means…", options: ["Success", "Page not found", "Server crashed", "Unauthorized"], answer: 1, explain: "404 = Not Found, a 4xx client-side error." },
        { q: "Which range means a server-side error?", options: ["2xx", "3xx", "4xx", "5xx"], answer: 3, explain: "5xx codes are server errors (e.g. 500 Internal Server Error)." }
      ]
    },
    {
      id: "http-methods",
      title: "HTTP Methods (PUT vs PATCH)",
      tag: "SHORT Q",
      html: `
        <table class="t"><tr><th>Method</th><th>Job</th></tr>
        <tr><td><b>GET</b></td><td>Retrieve / fetch data</td></tr>
        <tr><td><b>POST</b></td><td>Create something</td></tr>
        <tr><td><b>DELETE</b></td><td>Delete</td></tr>
        <tr><td><b>PUT</b></td><td>Update the <b>entire</b> resource</td></tr>
        <tr><td><b>PATCH</b></td><td>Update <b>part</b> of the resource</td></tr></table>
        <h3>PUT vs PATCH (very likely on the exam)</h3>
        <ul>
          <li><b>PATCH</b> = updates one part (e.g. just the phone number). If the resource doesn't exist, it <b>can't</b> create it.</li>
          <li><b>PUT</b> = updates the whole record. If it doesn't exist, PUT <b>force-creates</b> it.</li>
        </ul>
        <div class="hook"><b>Hook:</b> PAT<b>CH</b> = a <b>PA</b>rt. <b>PUT</b> = put the whole thing (and force it into existence if missing).</div>
      `,
      quiz: [
        { q: "To update only one field of a record you use…", options: ["PUT", "PATCH", "GET", "DELETE"], answer: 1, explain: "PATCH updates part of a resource; PUT replaces the whole thing." }
      ]
    },
    {
      id: "https",
      title: "HTTP vs HTTPS",
      tag: "MCQ",
      html: `
        <table class="t"><tr><th></th><th>HTTP</th><th>HTTPS</th></tr>
        <tr><td>Security</td><td>Sends data as <b>plain text</b></td><td><b>Encrypts</b> data first</td></tr>
        <tr><td>Certificate</td><td>—</td><td>Valid <b>SSL certificate</b></td></tr>
        <tr><td>Default port</td><td><b>80</b></td><td><b>443</b></td></tr></table>
        <p>Local servers (XAMPP-style) often have an invalid/fake SSL certificate → that's why you see a "Not Secure" warning locally, while real sites like YouTube have valid certificates.</p>
      `,
      quiz: [
        { q: "The default port for HTTPS is…", options: ["80", "443", "8080", "21"], answer: 1, explain: "HTTPS uses port 443; HTTP uses 80." }
      ]
    }
  ]
};
