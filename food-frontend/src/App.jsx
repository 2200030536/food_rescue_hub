import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css';
import ListFoodDonations from "./components/ListFoodDonations";
import DonationComponent from "./components/DonationComponent";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/donations" element={<ListFoodDonations />} />
          <Route path="/addDonations" element={<DonationComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
