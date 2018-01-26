import React, { Component } from 'react';
import moment from 'moment';
import Calendar from '../components/Calendar';

export default class CalendarContainer extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <Calendar startDate={moment('2018-1-24').toDate()} endDate={moment('2018-2-28').toDate()} holidays={[moment('2018-2-1').toDate(), moment('2018-1-21').toDate()]}/>
          </div>
        </div>
    );
  }
}
