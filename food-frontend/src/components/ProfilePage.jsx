// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const ProfilePage = () => {
//     const { state } = useLocation();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const id = state?.id; // Extract id from state passed via navigation

//     useEffect(() => {
//         if (id) {
//             axios
//                 .get(`http://localhost:8080/users/${id}`)
//                 .then((response) => {
//                     setUser(response.data);
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     setError("Error fetching user data");
//                     setLoading(false);
//                 });
//         }
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!user) {
//         return <div>No user found</div>;
//     }

//     return (
//         <div className="container mt-5">
//             <h2>User Profile</h2>
//             <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title">{user.name}</h5>
//                     <p className="card-text">Email: {user.email}</p>
//                     <p className="card-text">Contact: {user.contact}</p>
//                     <button className="btn btn-primary">Edit Password</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "./api"; // Use the centralized axios instance
// import UserHeader from "./UserHeader";

// const Profile = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const navigate = useNavigate();

//   // Fetch user details on component mount
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get("/auth/user/details");
//         setUserDetails(response.data);
//       } catch (error) {
//         console.error("Failed to fetch user details", error);
//         navigate("/login"); // Redirect to login if session is invalid
//       }
//     };

//     fetchUserDetails();
//   }, [navigate]);

//   const handleLogout = async () => {
//     try {
//       await axios.post("/auth/logout");
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed", error);
//     }
//   };

//   return (
//     <>
//     <UserHeader/>
//     <div className="container mt-5">
//       <h2>Welcome to your Profile</h2>
//       {userDetails ? (
//         <div>
//           <p><strong>ID:</strong> {userDetails.id}</p>
//           <p><strong>Name:</strong> {userDetails.name}</p>
//           <p><strong>Email:</strong> {userDetails.email}</p>
//         </div>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//       <button onClick={handleLogout} className="btn btn-danger mt-3">
//         Logout
//       </button>
//     </div>
//       </>
//   );
// };

// export default Profile;




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
