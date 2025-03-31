import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate''

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleDonateFood = () => {
    navigate('/addDonations'); // Navigate to the Donate Food page
    console.log("Navigate to Donate Food");
  };

  const handleReceiveFood = () => {
    navigate('/donations'); // Navigate to the Receive Food page
    console.log("Navigate to Receive Food");
  };

  const handleRegularUser = () => {
    navigate('/profile'); // Navigate to the Regular User page
    console.log("Navigate to Regular User");
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to Food Rescue Hub</h1>
      <p className="mb-5 text-muted">
        Choose an option below to get started.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={handleDonateFood}
          >
            Donate Food
          </button>
        </div>
        <div className="col-md-4 mb-3">
          <button
            className="btn btn-success btn-lg btn-block"
            onClick={handleReceiveFood}
          >
            Receive Food
          </button>
        </div>
        <div className="col-md-4 mb-3">
          <button
            className="btn btn-warning btn-lg btn-block"
            onClick={handleRegularUser}
          >
            Regular Use
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;