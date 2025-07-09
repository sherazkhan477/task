import React from 'react';
const feature_importance_model1  = '/01feature_importance_model1.png'
const feature_importance_model2 = '/02feature_importance_model2.png'
const barplot_performance_rating_by_working_years_range = '/03barplot_performance_rating_by_working_years_range.png'
const chart_years_at_company_binned_by_years_since_last_promotion_bar = '/04chart_years_at_company_binned_by_years_since_last_promotion_bar.png'
const chart_education_vs_years_since_last_promotion_scatter = '/05chart_education_vs_years_since_last_promotion_scatter.png'
const chart_job_level_vs_performance_rating_scatter = '/06chart_job_level_vs_performance_rating_scatter.png'

const Dashboard = () => {
    return (
        <div className="bg-[#769FCD] dark:bg-[#070F2B] p-6 h-full mb-10">
            <div className="mb-4 mt-0 sm:mb-0">
                <h1 className="text-2xl mb-6 md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Analysis</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                
                {/* First row */}
                <div className="col-span-1 lg:col-span-2">
                     <div className="bg-white p-6 rounded-lg shadow-md">
                         <h3 className="underline text-lg font-semibold mb-4">Performance Rating [by Working Years]</h3>
                        <img src={barplot_performance_rating_by_working_years_range} alt="Working year by performance rating" className="rounded-xl"  />
                     </div>
                 </div>

                <div className="col-span-1">
                    <div className="bg-white p-1 rounded-lg shadow-md">
                        <h3 className="underline text-lg pt-6 pl-6 font-semibold mb-3">Emp. Performance Rating Dependancy</h3>
                         <img src={feature_importance_model1} alt="XGBoost Model" className="rounded-xl" width="800" height="150" />
                    </div>
                </div>

                {/* Second row*/}
                <div className="col-span-1 lg:col-span-2">
                     <div className="bg-white p-6 rounded-lg shadow-md">
                         <h3 className="underline text-lg font-semibold mb-4">Years Since Last Pramotion Dependancy [by Years At Company]</h3>

                        <img src={chart_years_at_company_binned_by_years_since_last_promotion_bar} alt="Year at company by year since last performance" className="rounded-xl" width="700" height="128" />
                     </div>
                 </div>

                <div className="col-span-1">
                    <div className="bg-white p-1 rounded-lg shadow-md">
                        <h3 className="underline text-lg pt-6 pl-6 font-semibold mb-3">Years Since Last Pramotion Dependancy</h3>
                        <img src={feature_importance_model2} alt="lgb Model prediction" className="rounded-xl" width="800" height="128" />
                    </div>
                </div>

                {/* Third Row */}
                <div className="col-span-1 sm:col-span-6 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="underline text-lg font-semibold">Years Since Last Pramotion Dependancy [by Education]</h4>
                        <img src={chart_education_vs_years_since_last_promotion_scatter} alt="Education by years since last pramotion" className="rounded-xl" width="100%" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="underline text-lg font-semibold">Performance Rating [by Job Level]</h4>
                        <img src={chart_job_level_vs_performance_rating_scatter} alt="Job lavel by performance rating" className="rounded-xl" width="100%" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;