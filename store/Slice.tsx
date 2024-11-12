import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Asynchronously fetches data from the provided API endpoint.
 *
 * This function uses Redux Toolkit's `createAsyncThunk` to handle the asynchronous operation 
 * of fetching data from the endpoint. 
 * The result is stored in the Redux store success, and any errors are captured in the store if the request fails.
 *
 */

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://recruitment-test.flip.id/frontend-test');
  return response.data;
});

/**
 * The initial state for the data slice in the Redux store.
 *
 * typedef {Object} DataState
 * property {any[]} items - The list of items fetched from the API.
 * property {'idle' | 'loading' | 'succeeded' | 'failed'} status - The status of the data fetch.
 * property {string | null} error - An error message if the fetch fails, or null if no error.
 */

interface DataState {
  items: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  items: [],
  status: 'idle',
  error: null,
};

/**
 * The data slice of the Redux store, handling the fetching and state management of data.
 *
 * This slice uses `createSlice` to manage the state of the data fetching process, including 
 * handling the states of the fetch operation (loading, succeeded, failed) and storing the fetched items.
 */

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default dataSlice.reducer;