// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import './App.css';
// import ListFoodDonations from "./components/ListFoodDonations";
// import DonationComponent from "./components/DonationComponent";
// import Login from "./components/Login";
// import ProfilePage from "./components/ProfilePage";
// import SignupPage from "./components/SignUp";
// import About from "./components/About";
// import AwarenessSection from "./components/AwarenessSection";
// import Home from "./Home";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import AuthHeader from "./components/UserHeader"; // Add this for login-specific header

// const App = () => {
 

//   return (
//     <>
//     {/* <BrowserRouter> */}
//       {/* Render the appropriate header */}
//       {/* <Routes> */}
//         {/* <Route path="/home" element={<Home />} />
//         <Route path="/donations" element={<ListFoodDonations />} />
//         <Route path="/addDonations" element={<DonationComponent />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/user" element={<AwarenessSection />} />
//         <Route path="/profile" element={<ProfilePage />} /> */}
//       {/* </Routes> */}
//       {/* <Footer /> Footer remains consistent across all pages */}
//     {/* </BrowserRouter> */}
//     </>
//   );
// };

// // Wrap App with BrowserRouter to use useLocation
// // const WrappedApp = () => (
// //   <BrowserRouter>
// //     <App />
// //   </BrowserRouter>
// // );

// export default WrappedApp;
import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <nav style={{ backgroundColor: '#4CAF50', padding: '1em 0' }}>
      <ul style={{ listStyle: 'none', textAlign: 'center', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline-block', margin: '0 15px' }}>
          <Link to="/mydonations" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>
            MY Donation
          </Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>
            Profile
          </Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}>
          <Link to="/donations" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>
            All Donation Post
          </Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}>
          <Link to="/logout" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserHeader;
