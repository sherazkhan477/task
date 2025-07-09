import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>
    <div>
      <main className="flex flex-col items-center min-h-screen dark:bg-[#1B262C] bg-[#BBE1FA] p-24 mt-5">
        <div className="dark:bg-[#070F2B] bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-3xl font-bold dark:text-[#BBE1FA] text-gray-800 mb-6 text-center">Terms and Conditions</h1>
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold dark:text-[#BBE1FA] text-gray-700">1. Introduction</h2>
              <p className="dark:text-[#D6E6F2] text-gray-600">
                Welcome to Staff Sphere. These Terms and Conditions outline the rules and regulations for the use of our employee management system.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold dark:text-[#BBE1FA] text-gray-700">2. User Responsibilities</h2>
              <p className="dark:text-[#D6E6F2] text-gray-600">
                By accessing this platform, we assume you accept these terms and conditions. Do not continue to use Staff Sphere if you do not agree to all of the terms and conditions stated on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold dark:text-[#BBE1FA] text-gray-700">3. Privacy Policy</h2>
              <p className="dark:text-[#D6E6F2] text-gray-600">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold dark:text-[#BBE1FA] text-gray-700">4. Intellectual Property</h2>
              <p className="dark:text-[#D6E6F2] text-gray-600">
                All content on Staff Sphere, including text, images, and software, is the intellectual property of the company and is protected by copyright laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold dark:text-[#BBE1FA] text-gray-700">5. Termination of Access</h2>
              <p className="dark:text-[#D6E6F2] text-gray-600">
                We may terminate or suspend your access to Staff Sphere immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold dark:text-[#BBE1FA] text-gray-700">6. Governing Law</h2>
              <p className="dark:text-[#D6E6F2] text-gray-600">
                These terms shall be governed and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;
