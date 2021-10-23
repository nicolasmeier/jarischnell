import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ["00:00","01:00","02:00","03:00","04:00","05:00",
           "06:00","07:00","08:00","09:00","10:00","11:00",
           "12:00","13:00","14:00","15:00","16:00","17:00",
           "18:00","19:00","20:00","21:00","22:00","23:00"],
  datasets: [
    {
      label: '20.01.2020',
      data: [2.7640000000000002, 2.755, 2.636, 0.722, 0.959, 1.45, 1.046, 1.725, 1.735, 1.011, 1.186, 1.7670000000000001, 1.2399999999999998, 1.372, 0.767, 1.425, 0.843, 2.263, 1.656, 2.016, 1.9340000000000002, 1.7429999999999999, 3.583, 3.4219999999999997],
      fill: false,
      backgroundColor: 'rgb(95, 206, 78)',
      borderColor: 'rgba(95, 206, 78, 0.8)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'average',
      data: [3.3315    , 2.99883333, 2.841     , 1.81333333, 1.20466667,
        1.39083333, 2.11216667, 2.05416667, 1.902     , 1.38016667,
        1.67283333, 2.23383333, 1.75816667, 1.60366667, 1.353     ,
        1.54616667, 1.45816667, 1.94366667, 1.95016667, 2.027     ,
        2.27916667, 2.2585    , 3.30533333, 3.01683333],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    }
  ],
};

const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;