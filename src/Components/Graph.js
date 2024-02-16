// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const Graph = (datavalues) => {
//   console.log(datavalues)
//   const [chartData, setChartData] = useState({
//     series: [{
//       name: 'series1',
//       data: [31, 40, 28, 51, 42, 109, 100]
//     }, {
//       name: 'series2',
//       data: [11, 32, 45, 32, 34, 52, 41]
//     }],
//     options: {
//       chart: {
//         height: 350,
//         type: 'area'
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         curve: 'smooth'
//       },
//       xaxis: {
//         type: 'datetime',
//         categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//       },
//       tooltip: {
//         x: {
//           format: 'dd/MM/yy HH:mm'
//         },
//       },
//     }
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default Graph;
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Graph = ({ data }) => {
  const seriesData = [{
    name: 'Count',
    data: [
      { x: 'Approved', y: data.approved, color: '#00E396' },
      { x: 'Completed', y: data.completed, color: '#008FFB' },
      { x: 'Pending', y: data.pending, color: '#FEB019' },
      { x: 'Rejected', y: data.rejected, color: '#FF4560' }
    ]
  }];

  const options = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        columnWidth: '60%'
      }
    },
    xaxis: {
      categories: ['Approved', 'Completed', 'Pending', 'Rejected']
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={seriesData} type="bar" height={260} width={1000} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Graph;

