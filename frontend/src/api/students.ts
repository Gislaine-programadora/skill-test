import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Interface alinhada com o backend
export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  class_name: string;   // <-- corrigido para bater com o backend
  dob: string;
  gender: string;
  phone: string;
  address: string;
  created_at?: string;
  updated_at?: string;
}

// API com RTK Query
export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5007/api/v1/' }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    // Listar alunos
    listStudents: builder.query<Student[], void>({
      query: () => 'students',
      providesTags: ['Students'],
    }),

    // Criar aluno
    createStudent: builder.mutation<Student, Partial<Student>>({
      query: (body) => ({
        url: 'students',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Students'],
    }),

    // Atualizar aluno
    updateStudent: builder.mutation<Student, { id: number; body: Partial<Student> }>({
      query: ({ id, body }) => ({
        url: `students/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Students'],
    }),

    // Deletar aluno
    deleteStudent: builder.mutation<void, number>({
      query: (id) => ({
        url: `students/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

// Hooks gerados automaticamente
export const {
  useListStudentsQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentsApi;