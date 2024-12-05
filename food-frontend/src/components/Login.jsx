// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   // Handle input change
//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);

//   // Handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // API call for login
//       const response = await axios.post("http://localhost:8080/auth/user/login", {
//         email,
//         password,
//       });

//       if (response.data) {
//         const userId = response.data.id; // Get user id from response data
//         navigate("/profile", { state: { id: userId } }); // Pass id to profile page
//       }
//     } catch (error) {
//       setErrorMessage("Invalid email or password.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="form-control"
//             placeholder="Enter your email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             placeholder="Enter your password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>

//       {/* Signup button */}
//       <div className="text-center mt-3">
//         <p>Don't have an account?</p>
//         <button
//           onClick={() => navigate("/signup")}
//           className="btn btn-secondary w-100"
//         >
//           Signup
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        navigate("/profile", { state: { id: response.data.id } });
      }
    } catch (error) {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <>
      <Header/>
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
    </div>
    </>
  );
};

export default LoginPage;
