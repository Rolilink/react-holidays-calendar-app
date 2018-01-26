import React, { PureComponent } from 'react';
import moment from 'moment';
import Day from './Day';

export default class Month extends PureComponent {
  get nearestSundayToStartDate() {
    return moment(this.startDate).subtract(this.startDate.day(), 'days');
  }

  get nearestSaturdayToStartDate() {
    return moment(this.endDate).add(6 - this.endDate.day(), 'days');
  }

  get startDate() {
    return moment(this.props.startDate);
  }

  get endDate() {
    return moment(this.props.endDate);
  }

  isDateValid(date) {
    return this.startDate.isSame(moment(date), 'month') && moment(date).isSameOrBefore(this.endDate, 'day');
  }

  isDateHoliday(date) {
    return !!this.props.holidays.find(holiday => moment(holiday).isSame(moment(date), 'day'))
  }

  get daysRows() {
    let tempDate = moment(this.nearestSundayToStartDate);
    const rows = [];

    while (tempDate.isSameOrBefore(this.nearestSaturdayToStartDate)) {
      let days = [];

      for (var i = 0; i < 7; i++) {
        const date = moment(tempDate).add(i, 'days').toDate();
        const isInvalid = !this.isDateValid(date);
        const isHoliday = this.isDateHoliday(date);

        days.push(<Day {...{date, isInvalid, isHoliday}} />);
      }

      rows.push(days);
      tempDate.add(1, 'week');
    }

    return rows;
  }

  renderCalendarRows() {
    return this.daysRows.map((rows) => {
      return (
        <tr>
          {rows}
        </tr>
      );
    });
  }

  render() {
    const { startDate } = this.props;

    const monthAsMoment = moment(startDate);
    console.log(this.renderCalendarRows());
    return (
      <table className="table table-bordered Month">
        <thead>
          <tr>
            <th scope="col" colSpan="7">{monthAsMoment.format('MMMM - YYYY')}</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCalendarRows()}
        </tbody>
      </table>
    );
  }
}
