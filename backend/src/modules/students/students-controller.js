const db = require('../../config/db');

// Listar todos os alunos
exports.listStudents = (req, res) => {
  db.all('SELECT * FROM students', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// Buscar aluno por ID
exports.getStudent = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM students WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Student not found' });
    res.json(row);
  });
};

// Criar aluno
exports.createStudent = (req, res) => {
  const { first_name, last_name, email, class_name, dob, gender, phone, address } = req.body;
  const sql = `INSERT INTO students (first_name, last_name, email, class, dob, gender, phone, address)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  db.run(sql, [first_name, last_name, email, class_name, dob, gender, phone, address], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, first_name, last_name, email });
  });
};

// Atualizar aluno
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, class_name, dob, gender, phone, address } = req.body;
  const sql = `UPDATE students 
               SET first_name=?, last_name=?, email=?, class=?, dob=?, gender=?, phone=?, address=?, updated_at=CURRENT_TIMESTAMP 
               WHERE id=?`;
  db.run(sql, [first_name, last_name, email, class_name, dob, gender, phone, address, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Student not found' });
    res.json({ id, first_name, last_name, email });
  });
};

// Deletar aluno
exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM students WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Student not found' });
    res.status(204).send();
  });
};