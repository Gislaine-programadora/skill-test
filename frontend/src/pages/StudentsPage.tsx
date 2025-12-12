import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Grid,
  Drawer,
} from '@mui/material';
import {
  useListStudentsQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} from '../api/students';
import StudentForm from '../components/StudentForm';
import { useState } from 'react';

export default function StudentsPage() {
  const { data: students = [], isLoading, isError, refetch } = useListStudentsQuery();
  const [createStudent] = useCreateStudentMutation();
  const [updateStudent] = useUpdateStudentMutation();
  const [deleteStudent] = useDeleteStudentMutation();

  // Avoid importing Student type: use plain state
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editingStudent, setEditingStudent] = useState<any | null>(null);

  // Create
  const handleCreate = async (data: any) => {
    try {
      await createStudent(data).unwrap();
      refetch();
    } catch (err) {
      console.error('Erro ao criar estudante:', err);
    }
  };

  // Update
  const handleUpdate = async (data: any) => {
    try {
      if (editingStudent?.id) {
        await updateStudent({ id: editingStudent.id, body: data }).unwrap();
        setOpenDrawer(false);
        setEditingStudent(null);
        refetch();
      }
    } catch (err) {
      console.error('Erro ao atualizar estudante:', err);
    }
  };

  // Delete
  const handleDelete = async (id: number) => {
    try {
      await deleteStudent(id).unwrap();
      refetch();
    } catch (err) {
      console.error('Erro ao deletar estudante:', err);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f7f9fc' }}>
      {/* Main panel */}
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#1976d2', fontWeight: 700 }}>
          🎓 Painel de Estudantes
        </Typography>

        {/* Create section */}
        <Box sx={{ mb: 3, p: 2, borderRadius: 2, bgcolor: '#e3f2fd' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            ➕ Adicionar Estudante
          </Typography>
          <StudentForm onSubmit={handleCreate} />
        </Box>

        {isLoading && (
          <Box sx={{ mt: 2 }}>
            <CircularProgress />
          </Box>
        )}

        {isError && (
          <Box sx={{ mt: 2 }}>
            <Typography color="error">
              Erro ao carregar estudantes.
              <Button onClick={() => refetch()} sx={{ ml: 1 }} variant="outlined">
                Tentar novamente
              </Button>
            </Typography>
          </Box>
        )}

        {/* Cards grid */}
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {students.map((student: any) => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <Card
                sx={{
                  boxShadow: 4,
                  borderLeft: '6px solid #1976d2',
                  transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 700 }}>
                    {student.first_name} {student.last_name}
                  </Typography>
                  <Typography variant="body2">📘 {student.class_name}</Typography>
                  <Typography variant="body2">✉️ {student.email}</Typography>
                  <Typography variant="body2">📞 {student.phone}</Typography>
                  <Typography variant="body2">🏠 {student.address}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      setEditingStudent(student);
                      setOpenDrawer(true);
                    }}
                  >
                    ✏️ Atualizar
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(student.id)}
                  >
                    🗑️ Deletar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Right sidebar for update */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 420,
            p: 3,
            bgcolor: '#ffffff',
            boxShadow: 6,
          },
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 700 }}>
          ✏️ Atualizar Estudante
        </Typography>
        {editingStudent && (
          <StudentForm initialData={editingStudent} onSubmit={handleUpdate} />
        )}
      </Drawer>
    </Box>
  );
}