import React, { Component } from 'react';
import './App.css';
import DataTable from './App';
import TimeLogForm from './TimeLogComponent';

export class MainForm extends Component {
  render() {
   return (
      <div>
        <TimeLogForm />
        <DataTable />
      </div>
   );
 }
}

export default TimeLogForm;
