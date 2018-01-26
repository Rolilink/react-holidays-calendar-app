import { createAction } from 'redux-actions';
import request from 'superagent';
import { FETCH_HOLIDAYS } from './actionTypes';
import key from '../key';

export const fetchHolidays = createAction(FETCH_HOLIDAYS, ({ numberOfDays, startDate, countryCode }) => {
  return new Promise((resolve, reject) => {
    request
      .post(`https://holidayapi.com/v1/holidays?key=${key}&year=2008&country=${countryCode}`)
      .then((res) => {
        resolve({ startDate, numberOfDays, holidays: res.body.holidays });
      })
      .catch((e) => {
        reject('error');
      })
  })
})
