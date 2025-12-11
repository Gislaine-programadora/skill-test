const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../../seed_db/school.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao abrir o banco:', err.message);
  } else {
    console.log('Conectado ao banco SQLite em', dbPath);
  }
});

module.exports = db;