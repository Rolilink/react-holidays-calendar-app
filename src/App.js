import React, { Component } from 'react';
import CalendarContainer from './containers/CalendarContainer';
import FormContainer from './containers/FormContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <FormContainer />
            <CalendarContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
