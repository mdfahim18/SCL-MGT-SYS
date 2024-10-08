import appReducer from '@/lib/appSlice';
import assignmentsReducer from '@/lib/assignmentsSlice';
import feesReducer from '@/lib/feesSlice';
import paymentHistoryReducer from '@/lib/paymentHistory';
import paymentsReducer from '@/lib/paymentsSlice';
import studentsReducer from '@/lib/studentsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    app: appReducer,
    fees: feesReducer,
    payments: paymentsReducer,
    students: studentsReducer,
    paymentHistory: paymentHistoryReducer,
    assignments: assignmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
