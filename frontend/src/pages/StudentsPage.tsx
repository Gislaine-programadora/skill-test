import { useEffect, useState } from 'react';
import { Student } from '../api/students';
import StudentForm from './StudentsForm';

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);

  // Buscar alunos
  useEffect(() => {
    fetch('http://localhost:5007/api/v1/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  // Criar aluno
  const handleCreate = async (student: Partial<Student>) => {
    const res = await fetch('http://localhost:5007/api/v1/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    const newStudent = await res.json();
    setStudents(prev => [...prev, newStudent]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Students</h1>
      <StudentForm onSubmit={handleCreate} />
      <ul>
        {students.map(s => (
          <li key={s.id}>
            {s.first_name} {s.last_name} - {s.email} - {s.class}
          </li>
        ))}
      </ul>
    </div>
  );
}