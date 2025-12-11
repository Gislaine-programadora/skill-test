import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Box } from '@mui/material';
import { Student } from '../api/students';

// Validação com Zod
const schema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  class_name: z.string().min(1, 'Class is required'),
  dob: z.string().optional(),
  gender: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
  initial?: Partial<Student>;
}

export default function StudentForm({ onSubmit, initial }: Props) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: initial,
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}
    >
      <TextField label="First Name" {...register('first_name')} />
      <TextField label="Last Name" {...register('last_name')} />
      <TextField label="Email" {...register('email')} />
      <TextField label="Class" {...register('class_name')} />
      <TextField label="Date of Birth" type="date" {...register('dob')} InputLabelProps={{ shrink: true }} />
      <TextField label="Gender" {...register('gender')} />
      <TextField label="Phone" {...register('phone')} />
      <TextField label="Address" {...register('address')} />
      <Button type="submit" variant="contained">Save</Button>
    </Box>
  );
}