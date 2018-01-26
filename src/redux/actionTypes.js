import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export const FETCH_HOLIDAYS = 'number8/calendar/FETCH_HOLIDAYS';
export const FETCH_HOLIDAYS_SUCCESS = `${FETCH_HOLIDAYS}_${FULFILLED}`;
export const FETCH_HOLIDAYS_ERROR = `${FETCH_HOLIDAYS}_${REJECTED}`;
export const FETCH_HOLIDAYS_LOADING = `${FETCH_HOLIDAYS}_${PENDING}`;
