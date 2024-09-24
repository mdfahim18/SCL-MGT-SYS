import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Submission = {
  submitby: string;
  submitat: string;
  content: string;
  grade: number;
  feedback: string;
};

type TaskProps = {
  id: number;
  title: string;
  task: string;
  date: string | undefined;
  course: string;
  submission: Submission[];
};

type AssignmentsProps = {
  assignments: TaskProps[];
};

const initialState: AssignmentsProps = {
  assignments: [
    {
      id: 1,
      title: 'Math homework',
      task: 'Complete the problems on page 42.',
      date: '2024-08-01',
      course: 'Mathematics',
      submission: [
        {
          submitby: 'student 1',
          submitat: '2024-07-21T12:30:00Z',
          content: 'My completed homework',
          grade: 88,
          feedback: 'well done',
        },
      ],
    },
    {
      id: 2,
      title: 'History Essay',
      task: 'Write an essay on World War II.',
      date: '2024-08-05',
      course: 'History',
      submission: [
        {
          submitby: 'student 2',
          submitat: ' 2024-07-20T10:00:00Z',
          content: 'My essay',
          grade: 90,
          feedback: 'greate job!',
        },
      ],
    },
    {
      id: 3,
      title: 'Math homework',
      task: 'Complete the problems on page 42.',
      date: '2024-08-01',
      course: 'Mathematics',
      submission: [
        {
          submitby: 'student 1',
          submitat: '2024-07-21T12:30:00Z',
          content: 'My completed homework',
          grade: 88,
          feedback: 'well done',
        },
      ],
    },
    {
      id: 4,
      title: 'History Essay',
      task: 'Write an essay on World War II.',
      date: '2024-08-05',
      course: 'History',
      submission: [
        {
          submitby: 'student 2',
          submitat: ' 2024-07-20T10:00:00Z',
          content: 'My essay',
          grade: 90,
          feedback: 'greate job!',
        },
      ],
    },
  ],
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    makeAssignment: (state, action: PayloadAction<TaskProps>) => {
      state.assignments.push(action.payload);
    },

    makeAssignmentToGrade: (
      state,
      action: PayloadAction<{
        id: number;
        submitby: string;
        grade: number;
        feedback: string;
      }>
    ) => {
      const assignment = state.assignments.find(
        (item) => item.id === action.payload.id
      );

      if (assignment) {
        const submission = assignment.submission.find(
          (sub) => sub.submitby === action.payload.submitby
        );

        if (submission) {
          submission.grade = action.payload.grade;
          submission.feedback = action.payload.feedback;
        } else {
          assignment.submission.push({
            submitby: action.payload.submitby,
            submitat: new Date().toISOString(),
            content: '',
            grade: action.payload.grade,
            feedback: action.payload.feedback,
          });
        }
      }
    },
  },
});

export const { makeAssignment, makeAssignmentToGrade } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
