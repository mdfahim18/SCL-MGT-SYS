import { createSlice } from '@reduxjs/toolkit';

type Student = {
  id: string;
  name: string;
  user: string;
  age: number;
};

type StudentsStateProps = {
  students: Student[];
};

const initialState: StudentsStateProps = {
  students: [
    { id: 'S001', name: 'Alice Johnson', user: 'alice_johnson', age: 20 },
    { id: 'S002', name: 'Bob Smith', user: 'bob_smith', age: 22 },
    { id: 'S003', name: 'Charlie Brown', user: 'charlie_brown', age: 19 },
    { id: 'S004', name: 'David Williams', user: 'david_williams', age: 21 },
    { id: 'S005', name: 'Eva Amber', user: 'eva_amber', age: 22 },
    { id: 'S006', name: 'MD Fahim', user: 'md_fahim', age: 19 },
    { id: 'S006', name: 'MD Fahim', user: 'md_fahim', age: 19 },
    { id: 'S006', name: 'MD Fahim', user: 'md_fahim', age: 19 },
    { id: 'S006', name: 'MD Fahim', user: 'md_fahim', age: 19 },
    { id: 'S006', name: 'MD Fahim', user: 'md_fahim', age: 19 },
    { id: 'S006', name: 'MD Fahim', user: 'md_fahim', age: 19 },
    { id: 'S006', name: 'MD Fahim', user: 'md_fahim', age: 19 },
  ],
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
});

export default studentsSlice.reducer;
