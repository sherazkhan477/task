import React from 'react';
import pic1 from './images/Analysis.png'
import  pic2 from './images/Chat.jpg'


const Cards = () => {
  return (
    <div className="flex flex-col overflow-x-hidden font-sans m-0 p-0 text-[#0D134C] dark:text-[#BBE1FA] ">
      <div className="flex flex-row h-screen w-full">
        <div className="flex justify-center items-center w-1/2 bg-[#BBE1FA] dark:bg-[#070F2B]">
          <img
            src={pic1}
            alt="Scheduling Image"
            className="h-[500px] w-[600px] rounded-[7%] m-5"
          />
        </div>
        <div className="flex justify-center items-center w-1/2 bg-[#BBE1FA] dark:bg-[#070F2B] p-5 box-border">
          <div>
            <h2 className="text-4xl text-left mb-5 font-extrabold">Data-Driven Analysis with Machine Learning</h2>
            <p className="text-xl text-left mr-3">
              One of the standout features of Staff Sphere is its Analysis page. By leveraging XGBoost and LightGBM machine learning models, the platform offers highly accurate and insightful data analysis. The graphical representation of company performance across different sectors, paired with growth trends, allows businesses to make data-backed decisions. The ability to see where improvements are needed based on advanced models makes this system a powerful tool for any data-driven company.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-screen w-full">
        <div className="flex justify-center items-center w-1/2 bg-[#BBE1FA] dark:bg-[#070F2B] p-5 box-border">
          <div className='ml-10'>
            <h2 className="text-4xl text-left mb-5 font-extrabold">Real-Time Communication with Chat</h2>
            <p className="text-xl text-left">
              Staff Sphere’s Chat feature allows real-time communication across the team. It’s an essential tool for quick updates, discussions, and ensuring everyone is on the same page. Having the chat integrated within the platform eliminates the need for external communication apps, making the workflow smoother. Teams can instantly communicate and resolve queries related to projects or tasks in a collaborative space.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2 bg-[#BBE1FA] dark:bg-[#070F2B]">
          <img
            src={pic2}
            alt="Scheduling Image"
            className="h-[500px] w-[600px] rounded-[7%] m-5"
          />
        </div>
      </div>
      <div className="flex flex-row h-screen w-full">
        <div className="flex justify-center items-center w-1/2 bg-[#BBE1FA] dark:bg-[#070F2B]">
          <img
            src={pic2}
            alt="Scheduling Image"
            className="h-[500px] w-[600px] rounded-[7%] m-5"
          />
        </div>
        <div className="flex justify-center items-center w-1/2 bg-[#BBE1FA] dark:bg-[#070F2B] p-5 box-border">
          <div>
            <h2 className="text-4xl text-left mb-5 font-extrabold">User-Friendly and Visually Appealing Design</h2>
            <p className="text-xl text-left">
              Thanks to Tailwind CSS, Staff Sphere provides a clean and aesthetically pleasing design. The interface is simple yet elegant, ensuring ease of use for both tech-savvy users and those who are less familiar with such platforms. The site is highly responsive, and pages load quickly, making the user experience seamless.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row h-screen w-full">
        <div className="flex justify-center items-center w-1/2 bg-[#BBE1FA] dark:bg-[#070F2B] p-5 box-border">
          <div className='ml-10'>
            <h2 className="text-4xl text-left mb-5 font-extrabold">Comprehensive Company Dashboard</h2>
            <p className="text-base">
              The Dashboard is well-crafted, providing admins with an overarching view of company performance. I loved how it covers everything from sales data to income/expenses, making it easy to track key business metrics. The visual representation of these metrics helps in understanding the company’s current standing, making it easier for executives to make quick decisions.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2 bg-[#BBE1FA] dark:bg-[#070F2B]">
          <img
            src={pic2}
            alt="Scheduling Image"
            className="h-[500px] w-[600px] rounded-[7%] m-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
