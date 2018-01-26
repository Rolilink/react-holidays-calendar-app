import React, { PureComponent } from 'react';
import moment from 'moment';
import Month from './Month';


export default class Calendar extends PureComponent {
  get startDate() {
    return moment(this.props.startDate);
  }

  get endDate() {
    return moment(this.props.endDate);
  }

  get months() {
    let months = [];
    let tempDate = this.startDate;

    while (tempDate <= this.endDate || tempDate.isSame(this.endDate, 'month')) {
       months.push(moment(tempDate).date(1));

       tempDate = moment(tempDate).add(1,'month');
    }

    return months;
  }

  getMonthStartDate(month) {
    if(this.startDate.isSame(month, 'month')) {
      return this.startDate;
    }

    return month; // returns the first date of the month
  }

  getMonthEndDate(month) {
    if(this.endDate.isSame(month, 'month')) {
      return this.endDate;
    }

    return moment(month).add('months', 1).date(0); // gets the last day of the past month
  }

  getMonthHolidays(month) {
    return this.props.holidays.filter(holiday => moment(holiday).isSame(moment(month), 'month'));
  }

  renderMonths() {
    return this.months.map((month) => {
      return <Month startDate={this.getMonthStartDate(month).toDate()} endDate={this.getMonthEndDate(month).toDate()} holidays={this.getMonthHolidays(month)}/>
    });
  }

  render() {
    return (
      <div className="Calendar">
        <table className="table table-bordered CalendarHeader">
          <thead>
            <tr>
              <th scope="col">S</th>
              <th scope="col">M</th>
              <th scope="col">T</th>
              <th scope="col">W</th>
              <th scope="col">T</th>
              <th scope="col">F</th>
              <th scope="col">S</th>
            </tr>
          </thead>
        </table>
        {this.renderMonths()}
      </div>
    )
  }
}
