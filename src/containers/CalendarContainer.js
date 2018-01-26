import React, { Component } from 'react';
import moment from 'moment';
import Calendar from '../components/Calendar';
import { connect } from 'react-redux';

const transformHolidaysToDates = (holidays) => {
  return Object.keys(holidays).map((key) => moment(key, 'YYYY-MM-DD').toDate());
}

class CalendarContainer extends Component {
  render() {
    const { startDate, numberOfDays, holidays } = this.props;

    if (!startDate && !numberOfDays) {
      return null;
    }

    return (
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <Calendar
            startDate={moment(startDate, 'YYYY/MM/DD').toDate()}
            endDate={moment(startDate, 'YYYY/MM/DD').add(numberOfDays, 'days').toDate()}
            holidays={transformHolidaysToDates(holidays)}/>
          </div>
        </div>
    );
  }
}

export const component = CalendarContainer;

const mapStateToProps = (state) => {
  const { startDate, numberOfDays, holidays } = state;

  return {
    startDate,
    numberOfDays,
    holidays: holidays,
  }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
