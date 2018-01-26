import React, { PureComponent } from 'react';
import moment from 'moment';

export default class Day extends PureComponent {
  get className() {
    const { date, isHoliday, isInvalid } = this.props;
    const isWeekend = moment(date).day() > 4;

    if (isInvalid) {
      return 'Day Day-invalid';
    }

    if (isHoliday) {
      return 'Day Day-holiday';
    }

    if (isWeekend) {
      return 'Day Day-weekend';
    }

    return 'Day';
  }

  render() {
    const { date, isHoliday } = this.props;

    return (
      <td className={this.className}>{this.props.isInvalid ? " " : moment(date).date()}</td>
    )
  }
}
