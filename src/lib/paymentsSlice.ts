import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Payment = {
  id: string;
  user: string;
  amount: number | undefined;
  date: string;
  method: string;
};

type PaymentsStateProps = {
  payments: Payment[];
};
const initialState: PaymentsStateProps = {
  payments: [
    {
      id: '1',
      user: 'john_doe',
      amount: 150,
      date: '2024-07-01',
      method: 'Credit Card',
    },
    {
      id: '2',
      user: 'jane_smith',
      amount: 200,
      date: '2024-07-05',
      method: 'Bank Transfer',
    },
    {
      id: '3',
      user: 'alice_johnson',
      amount: 75.5,
      date: '2024-07-10',
      method: 'alice_johnson',
    },
  ],
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    makePayment: (state, action: PayloadAction<Payment>) => {
      state.payments.push(action.payload);
    },
  },
});

export const { makePayment } = paymentsSlice.actions;
export default paymentsSlice.reducer;
