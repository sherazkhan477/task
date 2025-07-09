import React, { useRef, useEffect, useState } from 'react';
import { useThemeProvider } from '../utils/ThemeContext';

import { chartColors } from './ChartjsConfig';
import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip,
} from 'chart.js';
import 'chartjs-adapter-moment';

// Import utilities
import { formatValue } from '../utils/Utils';

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);

function LineChart01({
  data,
  width,
  height
}) {

  const [chart, setChart] = useState(null)
  const canvas = useRef(null);
  const { currentTheme } = useThemeProvider();
  const darkMode = currentTheme === 'dark';
  const { tooltipBodyColor, tooltipBgColor, tooltipBorderColor } = chartColors; 

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const newChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: false,
            beginAtZero: true,
          },
          x: {
            type: 'time',
            time: {
              parser: 'MM-DD-YYYY',
              unit: 'month',
            },
            display: false,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
            bodyColor: darkMode ? tooltipBodyColor.dark : tooltipBodyColor.light,
            backgroundColor: darkMode ? tooltipBgColor.dark : tooltipBgColor.light,
            borderColor: darkMode ? tooltipBorderColor.dark : tooltipBorderColor.light,
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    setChart(newChart);
    return () => newChart.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!chart) return;

    if (darkMode) {
      chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.dark;
      chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.dark;
      chart.options.plugins.tooltip.borderColor = tooltipBorderColor.dark;
    } else {
      chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.light;
      chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.light;
      chart.options.plugins.tooltip.borderColor = tooltipBorderColor.light;
    }
    chart.update('none');
  }, [currentTheme]);

  return (
    <canvas ref={canvas} width={width} height={height}></canvas>
  );
}

export default LineChart01;

// import React, { useRef, useEffect, useState } from 'react';
// import { Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip } from 'chart.js';
// import 'chartjs-adapter-moment';
// import { chartColors } from './ChartjsConfig';
// import { formatValue } from '../utils/Utils';

// Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);

// function LineChart01({ data, width, height }) {
//   const canvas = useRef(null);
//   const [chart, setChart] = useState(null);

//   useEffect(() => {
//     // Check if the canvas is available before rendering the chart
//     if (!canvas.current) return;

//     const ctx = canvas.current;

//     // Create the chart only if the canvas is available
//     const newChart = new Chart(ctx, {
//       type: 'line',
//       data: data,
//       options: {
//         layout: {
//           padding: 20,
//         },
//         scales: {
//           y: {
//             display: true,
//             beginAtZero: true,
//           },
//           x: {
//             type: 'category', // Changed from 'time' to 'category' to match the data format
//             display: true,
//           },
//         },
//         plugins: {
//           tooltip: {
//             callbacks: {
//               title: () => false, // Disable tooltip title
//               label: (context) => formatValue(context.parsed.y),
//             },
//             bodyColor: chartColors.tooltipBodyColor.light,
//             backgroundColor: chartColors.tooltipBgColor.light,
//             borderColor: chartColors.tooltipBorderColor.light,
//           },
//           legend: {
//             display: false,
//           },
//         },
//         interaction: {
//           intersect: false,
//           mode: 'nearest',
//         },
//         maintainAspectRatio: false,
//         responsive: true,
//         resizeDelay: 200,
//       },
//     });

//     // Store the chart instance in state
//     setChart(newChart);

//     // Cleanup function to destroy the chart when the component is unmounted
//     return () => {
//       if (newChart) newChart.destroy();
//     };
//   }, [data, width, height]); // Added data, width, and height as dependencies

//   return (
//     <canvas ref={canvas} width={width} height={height}></canvas>
//   );
// }

// export default LineChart01;