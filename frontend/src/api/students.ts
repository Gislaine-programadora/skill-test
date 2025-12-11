import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Student {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  class: string;
  dob: string;
  gender: string;
  phone: string;
  address: string;
}

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5007/api/v1/' }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    listStudents: builder.query<Student[], void>({
      query: () => 'students',
      providesTags: ['Students'],
    }),
    createStudent: builder.mutation<Student, Partial<Student>>({
      query: (body) => ({
        url: 'students',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Students'],
    }),
    updateStudent: builder.mutation<Student, { id: number; body: Partial<Student> }>({
      query: ({ id, body }) => ({
        url: `students/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Students'],
    }),
    deleteStudent: builder.mutation<void, number>({
      query: (id) => ({
        url: `students/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

export const {
  useListStudentsQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentsApi;