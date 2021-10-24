import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Non availability of resources', 'Poor internet connection', 'Power Failure ', 'Insecure Portal of online learning'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  
};

const HorizontalBarChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Issues faced during online learning</h1>
      <div className='links'>
    <p>Unit: percentage</p>
      </div>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default HorizontalBarChart;