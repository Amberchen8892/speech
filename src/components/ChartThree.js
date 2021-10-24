import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [''],
  datasets: [
    {
      label: 'Online',
      data: [13],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth:1,
      borderColor: 'rgba(75, 192, 192, 1)',
      stack: 'Stack 0',
    },
    
    {
      label: 'Classroom',
      data: [57],
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
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <div className='header' style={{marginTop:'50px'}}>
      <h4 className='title'>Atmostphere is better for studying in online or classroom ?</h4>
      <div className='links'>
        
      </div>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default HorizontalBarChart;