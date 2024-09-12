import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PaymentHistory = {
  user: string | undefined;
  fee: number | undefined;
  amount: number | undefined;
  due: number | undefined;
  date: string | undefined;
  method: string | undefined;
};

type PaymentHistoryStateProps = {
  paymentHistory: PaymentHistory[];
};

const initialState: PaymentHistoryStateProps = {
  paymentHistory: [
    {
      user: 'john_doe',
      fee: 150,
      amount: 150,
      due: 15,
      date: '2024-07-01',
      method: 'Credit Card',
    },
    {
      user: 'jane_smith',
      fee: 200,
      amount: 200,
      due: 30,
      date: '2024-07-05',
      method: 'Bank Transfer',
    },
    {
      user: 'alice_johnson',
      fee: 75.5,
      amount: 75.5,
      due: 50,
      date: '2024-07-10',
      method: 'PayPal',
    },
  ],
};

const paymentHistorySlice = createSlice({
  name: 'paymentHistory',
  initialState,
  reducers: {
    dueAmount: (state, action: PayloadAction<PaymentHistory>) => {
      state.paymentHistory.push(action.payload);
    },
  },
});

export const { dueAmount } = paymentHistorySlice.actions;
export default paymentHistorySlice.reducer;
