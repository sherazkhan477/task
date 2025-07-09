import React from 'react';
const Job_Role_Distribution = '/09Job_Role_Distribution.png'

function DashboardCard11() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-[#769FCD] dark:bg-[#070F2B] shadow-sm">
      <header className="px-5 py-4  border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Reason for Refunds</h2>
      </header>
      <div className="grow overflow-hidden mr-2">
        <img src={Job_Role_Distribution} alt="Overtime Distribution" className="m-4 rounded-xl"  />
      </div>
    </div>
  );
}

export default DashboardCard11;
