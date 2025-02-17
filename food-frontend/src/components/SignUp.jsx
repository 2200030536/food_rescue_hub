import React, { useState } from "react";
import axios from "axios";
import {  Link } from "react-router-dom";
import Header from "./Header";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend
      const response = await axios.post("http://localhost:8080/auth/user/register", {
        name,
        email,
        contact,
        password,
      });

      if (response.data) {
        setSuccessMessage("User registered successfully.");
        setTimeout(() => window.location.href = "/login", 2000); // Redirect to login after success
      }
    } catch (error) {
      setErrorMessage(error.response ? error.response.data : "Something went wrong.");
    }
  };

  return (

    <>
    <Header/>
    <div className="container mt-5">
      <h2 className="text-center">Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
            />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
            />
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input
            type="text"
            id="contact"
            className="form-control"
            placeholder="Enter your contact number"
            value={contact}
            onChange={handleContactChange}
            required
            />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
            />
        </div>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
      <div className="mt-3">
          <Link to="/login">User login</Link>
        </div>
      
    </div>
    
            </>
  );
};

export default SignupPage;
