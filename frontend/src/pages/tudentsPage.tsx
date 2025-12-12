import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Button,
} from '@mui/material';
import StudentForm from '../components/StudentForm';
import {
  useListStudentsQuery,
  useCreateStudentMutation,
} from '../api/students';

export default function StudentsPage() {
  // Hook para listar alunos
  const { data: students, isLoading, isError, refetch } = useListStudentsQuery();

  // Hook para criar aluno
  const [createStudent] = useCreateStudentMutation();

  // Função de submit do formulário
  const handleCreate = async (data: any) => {
    try {
      await createStudent(data).unwrap();
      refetch(); // atualiza a lista após criar
    } catch (err) {
      console.error('Erro ao criar estudante:', err);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Estudantes
      </Typography>

      {/* Estado de carregamento */}
      {isLoading && <CircularProgress />}

      {/* Estado de erro */}
      {isError && (
        <Typography color="error">
          Erro ao carregar estudantes.{' '}
          <Button onClick={() => refetch()}>Tentar novamente</Button>
        </Typography>
      )}

      {/* Lista de alunos */}
      {students && (
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          }}
        >
          {students.map((student) => (
            <Card key={student.id} sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">
                  {student.first_name} {student.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  📘 {student.class_name}
                </Typography>
                <Typography variant="body2">✉️ {student.email}</Typography>
                <Typography variant="body2">📞 {student.phone}</Typography>
                <Typography variant="body2">🏠 {student.address}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* Formulário para adicionar aluno */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Adicionar Novo Estudante
        </Typography>
        <StudentForm onSubmit={handleCreate} />
      </Box>
    </Box>
  );
}