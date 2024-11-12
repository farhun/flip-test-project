import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/Slice';
import { RootState, AppDispatch } from '../store/store';

/**
 * Custom hook for fetching data from the Redux store. It dispatches a fetchData action 
 * when the status is 'idle', and returns the current data, status, error, and a refetch function.
 *
 *   returns {Object} - An object containing:
 *  - `items`: The fetched data items from the Redux store.
 *  - `status`: The current status of the data fetching process,
 *  - `error`: Any error that occurred during the data fetch.
 *  - `refetch`: A function to manually trigger a data fetch.
 */

export function useFetchData() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  return { items, status, error, refetch: () => dispatch(fetchData()) };
}