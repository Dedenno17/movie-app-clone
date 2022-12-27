import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface searchValueState {
  value: string;
}

const initialStateValue: searchValueState = {
  value: '',
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: initialStateValue,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;
export const selectSearchValue = (state: RootState) => state.searchValue.value;
export default searchValueSlice.reducer;
