import React from 'react';
const chart_career_development_distribution = '/08chart_career_development_distribution.png'
function DashboardCard05() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-[#769FCD] dark:bg-[#070F2B] shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Career Development Distribution</h2>
      </header>
      <img src={chart_career_development_distribution} alt="Career development distr." className="m-8 rounded-xl"  />
    </div>
  );
}

export default DashboardCard05;
