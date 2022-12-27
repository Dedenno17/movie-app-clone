import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// reducers
import appScreenWidthReducer from '../slices/appScreenWidth';
import appScrollYReducer from '../slices/appScrollY';
import searchValueReducer from '../slices/searchValue';

export const store = configureStore({
  reducer: {
    appScreenWidth: appScreenWidthReducer,
    appScrollY: appScrollYReducer,
    searchValue: searchValueReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
