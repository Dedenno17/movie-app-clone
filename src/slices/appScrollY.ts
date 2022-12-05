import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface appScrollYState {
  value: number | any | undefined;
}

const initialStateValue: appScrollYState = { value: 0 };

const appScrollYSlice = createSlice({
  name: 'appScrollY',
  initialState: initialStateValue,
  reducers: {
    setScrollY: (state, action: PayloadAction<number | any | undefined>) => {
      state.value = action.payload;
    },
  },
});

export const appScrollYActions = appScrollYSlice.actions;
export const selectAppScrollY = (state: RootState) => state.appScrollY.value;
export default appScrollYSlice.reducer;
