const { DatabaseSync } = require("node:sqlite");

const db = new DatabaseSync("guestbook.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    message TEXT
  )
`);

console.log("Database and table ready.");
db.close();
