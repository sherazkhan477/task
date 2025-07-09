import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainBanner from './components/MainBanner';
import Cards from './components/Cards';
import Pricing from './components/Pricing';
import LoginForm from './components/LoginForm';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <MainBanner />
          <Cards />
          <Pricing />
          <LoginForm />
        </>
      } />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default MainContent;
