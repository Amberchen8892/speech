import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: [''],
    datasets: [
      {
        label: 'Online',
        data: [9],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth:1,
        borderColor: 'rgba(75, 192, 192, 1)',
        stack: 'Stack 0',
      },
      
      {
        label: 'Classroom',
        data: [63],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth:1,
        borderColor: 'rgba(153, 102, 255, 1)',
        stack: 'Stack 1',
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
  plugins: {
    legend: {
      position: 'right',
    },
  },
 
};

const HorizontalBarChart = () => (
  <>
    <div className='header'>
      <h4 className='title'>Your doubts are leared better in online or classroom learning </h4>
      <div className='links'>
      </div>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default HorizontalBarChart;