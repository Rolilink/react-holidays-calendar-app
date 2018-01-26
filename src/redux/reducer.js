import { handleActions } from 'redux-actions';
import {
  FETCH_HOLIDAYS_SUCCESS,
  FETCH_HOLIDAYS_LOADING,
  FETCH_HOLIDAYS_ERROR,
} from './actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  startDate: null,
  numberOfDays: null,
  holidays: [],
};


const reducer = handleActions({
  [FETCH_HOLIDAYS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    startDate: payload.startDate,
    numberOfDays: payload.numberOfDays,
    holidays: payload.holidays,
  }),
  [FETCH_HOLIDAYS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload.error,
    isFetching: false,
  }),
  [FETCH_HOLIDAYS_LOADING]: state => ({
    ...state,
    error: null,
    isFetching: true,
  }),
}, initialState);

export default reducer;
