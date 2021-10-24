import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Up to 20 years old', '21 to 25 years old', '26 to 30 years old', '31 to 40 years old', ' More than 40 years old'],
  datasets: [
    {
      label: 'Classroom Students',
      data: [68.8, 24.3, 4.9, 3.0, 2.0],
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    
    {
      label: 'Online Students',
      data: [10.0, 22.6, 22.9, 33.5, 11.0],
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 1',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = () => (
  <>
    <div className='header' style={{marginTop:'50px'}}>
      <h4 className='title'>Percentage of students by age when enrolling to SSRI program</h4>
      <div className='links'>
        <p>Unit: percentage</p>
      </div>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default GroupedBar;