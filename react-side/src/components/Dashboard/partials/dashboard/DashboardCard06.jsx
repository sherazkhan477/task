import React from 'react';
const chart_overtime_distribution_pie = '/10chart_overtime_distribution_pie.png'
function DashboardCard06() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-[#769FCD] dark:bg-[#070F2B] shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Overtime Distribution</h2>
      </header>
      <img src={chart_overtime_distribution_pie} alt="Overtime Distribution" className="m-4 rounded-xl"  />
    </div>
  );
}

export default DashboardCard06;
