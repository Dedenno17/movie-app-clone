import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface appScreenWidthState {
  value: number | undefined;
}

const initialStateValue: appScreenWidthState = { value: 0 };

const appScreenWidthSlice = createSlice({
  name: 'appScreenWidth',
  initialState: initialStateValue,
  reducers: {
    setScreenWidth: (state, action: PayloadAction<number | undefined>) => {
      state.value = action.payload;
    },
  },
});

export const appScreenWidthActions = appScreenWidthSlice.actions;
export const selectAppScreenWidth = (state: RootState) =>
  state.appScreenWidth.value;
export default appScreenWidthSlice.reducer;
