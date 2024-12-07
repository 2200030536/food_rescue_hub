import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";


const Home = () => {
  return (
    <>
    <Header/>
      <div className="homepage">
        <HeroSection/>
        {/* <header className="hero-section text-white text-center">
          <div className="container">
            <h1 className="display-4">Reduce Food Waste, Improve Lives</h1>
            <p className="lead">
              Join us in creating a world with zero food waste and sustainable food security.
            </p>
            <a href="/about" className="btn btn-primary btn-lg mt-3">
              Learn More
            </a>
          </div>
        </header> */}

        {/* Features Section */}
        <section id="features" className="features-section py-5">
          <div className="container text-center">
            <h2 className="mb-4">Our Features</h2>
            <div className="row">
              <div className="col-md-3">
                <i className="fas fa-user-shield feature-icon"></i>
                <h5>Admin</h5>
                <p>Manage platform content and user interactions effectively.</p>
              </div>
              <div className="col-md-3">
                <i className="fas fa-donate feature-icon"></i>
                <h5>Food Donor</h5>
                <p>List surplus food and track your donations' impact.</p>
              </div>
              <div className="col-md-3">
                <i className="fas fa-truck feature-icon"></i>
                <h5>Recipient Organization</h5>
                <p>Request food donations and manage logistics seamlessly.</p>
              </div>
              <div className="col-md-3" >
                <i className="fas fa-chart-line feature-icon"></i>
                <h5>Data Analyst</h5>
                <p>Analyze data to improve food waste management.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
