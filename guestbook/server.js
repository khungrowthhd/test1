const http = require("http");
const fs = require("fs");
const { DatabaseSync } = require("node:sqlite");

const db = new DatabaseSync("guestbook.db");

function renderPage() {
  const rows = db.prepare("SELECT * FROM messages").all();

  const items = rows
    .map((row) => `<li><strong>${row.name}</strong>: ${row.message}</li>`)
    .join("\n");

  const html = fs.readFileSync("guestbook.html", "utf8");
  return html.replace("<!-- MESSAGES -->", items);
}

const server = http.createServer((request, response) => {
  if (request.method === "POST" && request.url === "/sign") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const formData = new URLSearchParams(body);
      const name = formData.get("name");
      const message = formData.get("message");

      const insert = db.prepare("INSERT INTO messages (name, message) VALUES (?, ?)");
      insert.run(name, message);

      response.setHeader("Content-Type", "text/html");
      response.end(renderPage());
    });
  } else {
    response.setHeader("Content-Type", "text/html");
    response.end(renderPage());
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
