import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./api"; // Use the centralized axios instance
import UserHeader from "./UserHeader";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  // Fetch user details on component mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/auth/user/details");
        setUserDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch user details", error);
        navigate("/login"); // Redirect to login if session is invalid
      }
    };

    fetchUserDetails();
  }, [navigate]);

  // const handleLogout = async () => {
  //   try {
  //     await axios.post("/auth/logout");
  //     navigate("/"); // Redirect to the homepage after logout
  //   } catch (error) {
  //     console.error("Logout failed", error);
  //   }
  // };

  return (
    <>
      <UserHeader />
      <div className="container mt-5">
        <h2>Welcome to your Profile</h2>
        {userDetails ? (
          <div>
            <p><strong>ID:</strong> {userDetails.id}</p>
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
        {/* <button onClick={handleLogout} className="btn btn-danger mt-3">
          Logout
        </button> */}
      </div>
    </>
  );
};

export default Profile;
