const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, '../../../seed_db/school.db');
const schemaPath = path.resolve(__dirname, '../../../seed_db/schema.sql');
const seedPath = path.resolve(__dirname, '../../../seed_db/seed.sql');

// garante que o arquivo existe
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '');
}

const schema = fs.readFileSync(schemaPath, 'utf-8');
const seed = fs.readFileSync(seedPath, 'utf-8');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.exec(schema, (err) => {
    if (err) console.error('Erro aplicando schema:', err.message);
    else console.log('Schema aplicado com sucesso');
  });

  db.exec(seed, (err) => {
    if (err) console.error('Erro aplicando seed:', err.message);
    else console.log('Seed aplicado com sucesso');
  });
});

db.close();