import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// reducers
import appScreenWidthReducer from '../slices/appScreenWidth';
import appScrollYReducer from '../slices/appScrollY';

export const store = configureStore({
  reducer: {
    appScreenWidth: appScreenWidthReducer,
    appScrollY: appScrollYReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
