import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css';
import ListFoodDonations from "./components/ListFoodDonations";
import DonationComponent from "./components/DonationComponent";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import SignupPage from "./components/SignUp";
import About from "./components/About";
import AwarenessSection from "./components/AwarenessSection";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/donations" element={<ListFoodDonations />} />
          <Route path="/addDonations" element={<DonationComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<AwarenessSection />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
