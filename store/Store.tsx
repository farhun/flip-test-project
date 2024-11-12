import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slice';

/**
 * Configures the Redux store with the `data` reducer and provides types for `RootState` and `AppDispatch`.
 */

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;