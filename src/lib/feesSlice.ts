import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Fee = {
  id: string;
  user: string;
  amount: number | undefined;
  date: string | undefined;
};
type FeesStateProps = {
  fees: Fee[];
};
type UpdateAmountPayload = {
  updateUser: string | undefined;
  amount: number | undefined;
};
const initialState: FeesStateProps = {
  fees: [
    {
      id: '1',
      user: 'john_doe',
      amount: 100,
      date: '2024-08-01',
    },
    {
      id: '2',
      user: 'jane_smit',
      amount: 170.5,
      date: '2024-08-15',
    },
    {
      id: '3',
      user: 'alice_johnson',
      amount: 200.75,
      date: '2024-09-01',
    },
  ],
};

const feesSlice = createSlice({
  name: 'fees',
  initialState,
  reducers: {
    createFee: (state, action: PayloadAction<Fee>) => {
      state.fees.push(action.payload);
    },

    updateAmount: (state, action: PayloadAction<UpdateAmountPayload>) => {
      const { updateUser, amount } = action.payload;
      const feeToUpdate = state.fees.find((item) => item.user === updateUser);
      if (!feeToUpdate) {
        alert('User not matching');
      }
      if (feeToUpdate) {
        feeToUpdate.amount = amount;
      }
    },
  },
});

export const { createFee, updateAmount } = feesSlice.actions;
export default feesSlice.reducer;
