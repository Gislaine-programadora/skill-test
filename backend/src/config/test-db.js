const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../../seed_db/school.db');
const db = new sqlite3.Database(dbPath);

db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
  if (err) throw err;
  console.log("Tabelas no banco:", rows);
});

db.close();