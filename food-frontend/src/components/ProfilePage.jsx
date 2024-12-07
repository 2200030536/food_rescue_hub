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

  return (
    <>
      <UserHeader />
      <div className="container mt-5">
        <div className="card mx-auto shadow-lg" style={{ maxWidth: "600px" }}>
          <div className="card-header bg-primary text-white text-center">
            <h3>Your Profile</h3>
          </div>
          <div className="card-body">
            {userDetails ? (
              <div className="text-center">
                <img
                  src={`https://ui-avatars.com/api/?name=${userDetails.name}&background=random`}
                  alt="User Avatar"
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px" }}
                />
                <p><strong>ID:</strong> {userDetails.id}</p>
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
              </div>
            ) : (
              <p className="text-center">Loading user details...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
