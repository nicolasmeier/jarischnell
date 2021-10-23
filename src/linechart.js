import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      yAxes: [
        {
          beginAtZero: true,
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            drawOnArea: false,
          },
        },
        {
          type: 'linear',
          display: false,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

const LineChart = (props) => (
  <>
    <Line data={props.data} options={options} />
  </>
);

export default LineChart;