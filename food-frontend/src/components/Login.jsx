import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "./api";
import Header from "./Header";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/user/login", { email, password });
      if (response.data) {
        navigate("/homepage", { state: { id: response.data.id } });
      }
    } catch (error) {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3">
          <Link to="/signup">User Signup</Link>
        </div>
        <div className="mt-3">
          <Link to="/admin-login">Admin Login</Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
