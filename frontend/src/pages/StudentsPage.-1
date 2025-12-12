import { useListStudentsQuery, useCreateStudentMutation } from "../api/students";
import StudentForm from "../components/StudentForm";

export default function StudentsPage() {
  const { data: students = [], isLoading } = useListStudentsQuery();
  const [createStudent] = useCreateStudentMutation();

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Students</h1>
      <StudentForm onSubmit={(data) => createStudent(data)} />
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.first_name} {s.last_name} - {s.email} - {s.class_name}
          </li>
        ))}
      </ul>
    </div>
  );
}