import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Piechart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 100
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Piechart;
