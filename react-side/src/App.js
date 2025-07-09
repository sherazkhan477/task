import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainBanner from "./components/MainBanner";
import Cards from "./components/Cards";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQs";




import Workspace from "./components/Dashboard/Workspace";
import DSidebar from "./components/Dashboard/DSidebar";
import Chat from "./components/Dashboard/Chat";
import Analysis from "./components/Dashboard/Analysis";
import UpdateFeed from "./components/Dashboard/UpdateFeed";
import Users from "./components/Dashboard/Users";
import DefaultD from "./components/Dashboard/DefaultD";
import ThemeToggle from "./components/ThemeToggle";
import Dropdown from "./components/Dropdown";
import ProfilePageWithSidebarAndEditablePhoto from "./components/ProfilePage";
import NotificationsPage from "./components/NotificationsPage";
import PasswordPage from "./components/PasswordPage";
import WorkingStatusPage from "./components/WorkingStatusPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/T&C";
import { AuthProvider } from "./context/AuthContext";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import PrivateRoute from "./utils/PrivateRoute";
import Form from "./components/Form";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/form" element={<Form/>}/>
          <Route
            path="/"
            element={
              <>
                <Navbar scroll="true" />
                <Dropdown />
                <MainBanner />
                <Cards />
                <Pricing />
                {/* <LoginForm /> */}
                <Footer />
              </>
            }
          />
          <Route
            path="/dashboard/"
            element={
              <PrivateRoute>
                <DSidebar />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/Ddashboard" element={<DefaultD />} />
            <Route path="/dashboard/workspace" element={<Workspace />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/chat" element={<Chat />} />
            <Route path="/dashboard/update_feed" element={<UpdateFeed />} />
            <Route path="/dashboard/analysis" element={<Analysis />} />
          </Route>
          <Route path="/resource/">
            <Route path="/resource/FAQ" element={<FAQ />} />
            <Route path="/resource/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/resource/T&C" element={<TermsAndConditions />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/personal-info"
            element={<ProfilePageWithSidebarAndEditablePhoto />}
          />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/working-status" element={<WorkingStatusPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
