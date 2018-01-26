import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHolidays } from '../redux/actions';

function getInitialState() {
  return {
    startDate: '',
    numberOfDays: '',
    countryCode: '',
  };
}

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  onSubmit() {
    const { startDate, numberOfDays, countryCode } = this.state;

    this.props.fetchHolidays({ startDate, numberOfDays, countryCode});
  }

  render() {
    return (
      <div className="row">
        <div className="panel col-md-8 col-md-offset-2">
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" onChange={e => this.setState({startDate: e.target.value })} className="form-control" id="startDate" />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfDays">Number of Days</label>
                <input type="text" onChange={e => this.setState({numberOfDays: e.target.value })} className="form-control" id="numberOfDays" />
              </div>
              <div className="form-group">
                <label htmlFor="countryCode">Country Code</label>
                <input type="text" onChange={e => this.setState({countryCode: e.target.value })} className="form-control" id="countryCode" />
              </div>
              <a href="#" onClick={() => this.onSubmit()} className="btn btn-primary">Generate Calendar</a>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { fetchHolidays };
const mapStateToProps = () => ({});

export const component = FormContainer;
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
