// import React from 'react';
// import { Link } from 'react-router-dom';
// import LineChart from '../../charts/LineChart01';
// import { chartAreaGradient } from '../../charts/ChartjsConfig';
// import EditMenu from '../../components/DropdownEditMenu';

// // Import utilities
// import { tailwindConfig, hexToRGB } from '../../utils/Utils';

// function DashboardCard01() {

//   const chartData = {
//     labels: [
//       '12-01-2022',
//       '01-01-2023',
//       '02-01-2023',
//       '03-01-2023',
//       '04-01-2023',
//       '05-01-2023',
//       '06-01-2023',
//       '07-01-2023',
//       '08-01-2023',
//       '09-01-2023',
//       '10-01-2023',
//       '11-01-2023',
//       '12-01-2023',
//       '01-01-2024',
//       '02-01-2024',
//       '03-01-2024',
//       '04-01-2024',
//       '05-01-2024',
//       '06-01-2024',
//       '07-01-2024',
//       '08-01-2024',
//       '09-01-2024',
//       '10-01-2024',
//       '11-01-2024',
//       '12-01-2024',
//       '01-01-2025',
//     ],
//     datasets: [
//       // Indigo line
//       {
//         data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
//         fill: true,
//         backgroundColor: function(context) {
//           const chart = context.chart;
//           const {ctx, chartArea} = chart;
//           return chartAreaGradient(ctx, chartArea, [
//             { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
//             { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
//           ]);
//         },            
//         borderColor: tailwindConfig().theme.colors.violet[500],
//         borderWidth: 2,
//         pointRadius: 0,
//         pointHoverRadius: 3,
//         pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
//         pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
//         pointBorderWidth: 0,
//         pointHoverBorderWidth: 0,
//         clip: 20,
//         tension: 0.2,
//       },
//       // Gray line
//       {
//         data: [532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642],
//         borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
//         borderWidth: 2,
//         pointRadius: 0,
//         pointHoverRadius: 3,
//         pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
//         pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
//         pointBorderWidth: 0,
//         pointHoverBorderWidth: 0,
//         clip: 20,
//         tension: 0.2,
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
//       <div className="px-5 pt-5">
//         <header className="flex justify-between items-start mb-2">
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Acme Plus</h2>
//           {/* Menu button */}
//           <EditMenu align="right" className="relative inline-flex">
//             <li>
//               <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
//                 Option 1
//               </Link>
//             </li>
//             <li>
//               <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
//                 Option 2
//               </Link>
//             </li>
//             <li>
//               <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">
//                 Remove
//               </Link>
//             </li>
//           </EditMenu>
//         </header>
//         <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Sales</div>
//         <div className="flex items-start">
//           <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">$24,780</div>
//           <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+49%</div>
//         </div>
//       </div>
//       {/* Chart built with Chart.js 3 */}
//       <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
//         {/* Change the height attribute to adjust the chart height */}
//         <LineChart data={chartData} width={389} height={128} />
//       </div>
//     </div>
//   );
// }

// export default DashboardCard01;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import LineChart from '../../charts/LineChart01';
// import { chartAreaGradient } from '../../charts/ChartjsConfig';
// import EditMenu from '../../components/DropdownEditMenu';

// // Import utilities
// import { tailwindConfig, hexToRGB } from '../../utils/Utils';

// function DashboardCard01() {

//   const chartData = {
//     labels: [
//       '12-01-2022',
//       '01-01-2023',
//       '02-01-2023',
//       '03-01-2023',
//       '04-01-2023',
//       '05-01-2023',
//       '06-01-2023',
//       '07-01-2023',
//       '08-01-2023',
//       '09-01-2023',
//       '10-01-2023',
//       '11-01-2023',
//       '12-01-2023',
//       '01-01-2024',
//       '02-01-2024',
//       '03-01-2024',
//       '04-01-2024',
//       '05-01-2024',
//       '06-01-2024',
//       '07-01-2024',
//       '08-01-2024',
//       '09-01-2024',
//       '10-01-2024',
//       '11-01-2024',
//       '12-01-2024',
//       '01-01-2025',
//     ],
//     datasets: [
//       // Indigo line
//       {
//         data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
//         fill: true,
//         backgroundColor: function(context) {
//           const chart = context.chart;
//           const {ctx, chartArea} = chart;
//           return chartAreaGradient(ctx, chartArea, [
//             { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
//             { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
//           ]);
//         },            
//         borderColor: tailwindConfig().theme.colors.violet[500],
//         borderWidth: 2,
//         pointRadius: 0,
//         pointHoverRadius: 3,
//         pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
//         pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
//         pointBorderWidth: 0,
//         pointHoverBorderWidth: 0,
//         clip: 20,
//         tension: 0.2,
//       },
//       // Gray line
//       {
//         data: [532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642],
//         borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
//         borderWidth: 2,
//         pointRadius: 0,
//         pointHoverRadius: 3,
//         pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
//         pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
//         pointBorderWidth: 0,
//         pointHoverBorderWidth: 0,
//         clip: 20,
//         tension: 0.2,
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
//       <div className="px-5 pt-5">
//         <header className="flex justify-between items-start mb-2">
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Acme Plus</h2>
//           {/* Menu button */}
//           <EditMenu align="right" className="relative inline-flex">
//             <li>
//               <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
//                 Option 1
//               </Link>
//             </li>
//             <li>
//               <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
//                 Option 2
//               </Link>
//             </li>
//             <li>
//               <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">
//                 Remove
//               </Link>
//             </li>
//           </EditMenu>
//         </header>
//         <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Sales</div>
//         <div className="flex items-start">
//           <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">$24,780</div>
//           <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+49%</div>
//         </div>
//       </div>
//       {/* Chart built with Chart.js 3 */}
//       <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
//         {/* Change the height attribute to adjust the chart height */}
//         <LineChart data={chartData} width={389} height={128} />
//       </div>
//     </div>
//   );
// }

// export default DashboardCard01;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Papa from 'papaparse'; // Import PapaParse
// import LineChart from '../../charts/LineChart01';
// import { chartAreaGradient } from '../../charts/ChartjsConfig';
// import EditMenu from '../../components/DropdownEditMenu';

// // Import utilities
// import { tailwindConfig, hexToRGB } from '../../utils/Utils';

// function DashboardCard01() {
//   const [chartData, setChartData] = useState({
//     labels: [], // This will hold the Date column values
//     datasets: [
//       {
//         data: [], // This will hold the Sales column values
//         fill: true,
//         backgroundColor: '',
//         borderColor: '',
//         borderWidth: 2,
//         pointRadius: 0,
//         tension: 0.2,
//       },
//     ],
//   });

//   // Function to fetch and parse CSV data
//   const fetchCSVData = () => {
//     Papa.parse('/csv/ChartJs01.csv', {
//       download: true,
//       header: true, // Parse CSV with header row
//       complete: function (results) {
//         const labels = [];
//         const dataset = [];

//         // Loop through the CSV data and extract Date and Sales columns
//         results.data.forEach((row) => {
//           labels.push(row.TotalWorkingYears); // Push Date column values to labels
//           dataset.push(row.PerformanceRating); // Push Sales column values to dataset
//         });

//         // Update chart data with parsed CSV values
//         setChartData({
//           labels: labels, // Dates become labels
//           datasets: [
//             {
//               data: dataset, // Sales become dataset
//               fill: true,
//               backgroundColor: function (context) {
//                 const chart = context.chart;
//                 const { ctx, chartArea } = chart;
//                 return chartAreaGradient(ctx, chartArea, [
//                   { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
//                   { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` },
//                 ]);
//               },
//               borderColor: tailwindConfig().theme.colors.violet[500],
//               borderWidth: 2,
//             },
//           ],
//         });
//       },
//     });
//   };

//   // Use useEffect to fetch the CSV data when the component mounts
//   useEffect(() => {
//     fetchCSVData();
//   }, []);

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
//       <div className="px-5 pt-5">
//         <header className="flex justify-between items-start mb-2">
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Acme Plus</h2>
//           <EditMenu align="right" className="relative inline-flex">
//             <li>
//               <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
//                 Option 1
//               </Link>
//             </li>
//             <li>
//               <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
//                 Option 2
//               </Link>
//             </li>
//             <li>
//               <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">
//                 Remove
//               </Link>
//             </li>
//           </EditMenu>
//         </header>
//         <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Sales</div>
//         <div className="flex items-start">
//           <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">$24,780</div>
//           <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+49%</div>
//         </div>
//       </div>
//       {/* Chart built with Chart.js 3 */}
//       <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
//         {/* Change the height attribute to adjust the chart height */}
//         <LineChart data={chartData} width={500} height={300} />
//       </div>
//     </div>
//   );
// }

// export default DashboardCard01;


import React from 'react';

const xgbModelImage = '/ml/xgb_model.png';

function DashboardCard01() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      {/* <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]"> */}
        <img src={xgbModelImage} alt="XGBoost Model" width="389" height="128" />
      {/* </div> */}
    </div>
  );
}

export default DashboardCard01;