import React, { Component } from 'react';
import './App.css';

const data = [
  {
    Name: 'User0',
    Date: '09.09.09',
    Time: '0 hours 1 min',
    Activity: 'Implementation',
    Delete: null
  },
  {
    Name: 'User1',
    Date: '12.12.12',
    Time: '0 hours 10 min',
    Activity: 'Research',
    Delete: null
  },
  {
    Name: 'User2',
    Date: '11.11.07',
    Time: '1 hour 0 min',
    Activity: 'Communication',
    Delete: null
  },
  {
    Name:'User3',
    Date: '10.10.10',
    Time: '1 hour 1 min',
    Activity: 'Implementation'
  },
  {
    Name: 'User4',
    Date: '08.08.09',
    Time: '1 hour 10 min',
    Activity: 'Communication',
    Delete: null
  },
  {
    Name: 'User5',
    Date: '09.12.09',
    Time: '10 hours 1 min',
    Activity: 'Research',
    Delete: null
  },
  {
    Name: 'User6',
    Date: '12.09.09',
    Time: '10 hours 10 min',
    Activity: 'Communication',
    Delete: null
  },
  {
    Name: 'User7',
    Date: '09.09.12',
    Time: '100 hours 1 min',
    Activity: 'Communication',
    Delete: null
  },
  {
    Name: 'User8',
    Date: '09.12.12',
    Time: '100 hours 10 min',
    Activity: 'Implementation',
    Delete: null
  },
  {
    Name: 'User9',
    Date: '12.09.12',
    Time: '0 hours 0 mins',
    Activity: 'Implementation',
    Delete: null
  }
]

const Table = props => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map(header => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => (
          <Row column={row} />
        ))}
      </tbody>
    </table>
  );
};

const Row = props => {
  return (
    <tr>
      <td>{props.column.Name}</td>
      <td>{props.column.Date}</td>
      <td>{props.column.Time}</td>
      <td>{props.column.Activity}</td>
      <td>{props.column.Delete == null ? "Удалить" : props.column.Delete }</td>
    </tr>
  );
};

function DataTable() {
  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default DataTable;
