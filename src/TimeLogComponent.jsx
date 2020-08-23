import React, { Component } from 'react';
import './App.css';

export class TimeLogForm extends Component {
  render() {
   return (
      <div className="time-log-element">
        <input type="text" name="name" text="Name" required />
        <input type="text" name="date" text="Date" required />
        <input type="text" name="time" text="Time spent" required />
        <input type="text" name="activity" text="Activity" required />
      </div>
   );
 }
}

export default TimeLogForm;
