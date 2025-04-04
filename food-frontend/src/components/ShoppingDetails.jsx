import React, { useEffect, useState } from "react";
import axios from "./api";
import RegUserSideNav from "./regUserSideNav.jsx";
import { useNavigate } from "react-router-dom";

const ShoppingDetails = () => {
  const [shoppingData, setShoppingData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/auth/user/details");
        if (response.data && response.data.id) {
          setUserId(response.data.id);
        } else {
          alert("Failed to fetch user ID. Please log in again.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
        navigate("/login");
      }
    };
    fetchUserDetails();
  }, [navigate]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`/shopping-data/user/${userId}`)
        .then((response) => {
          setShoppingData(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch shopping details. Please try again later.");
          setLoading(false);
        });
    }
  }, [userId]);

  if (loading) {
    return <div className="text-center mt-5">Loading shopping details...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  return (
    <>
      <RegUserSideNav />

      <div className="container mt-4">
        <h2 className="text-center">Shopping Details</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Purchase Date</th>
              <th>Expiry Date</th>
              <th>Days Remaining</th>
              <th>Status</th>
              <th>Category</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {shoppingData.map((data) => (
              <tr key={data.id}>
                <td>{data.itemName}</td>
                <td>{data.itemQuantity}</td>
                <td>{new Date(data.purchaseDate).toLocaleDateString()}</td>
                <td>{new Date(data.expiryDate).toLocaleDateString()}</td>
                <td>{data.daysRemaining < 0 ? 0 : data.daysRemaining}</td>
                <td>{data.status ? "Available" : "Expired"}</td>
                <td>{data.category}</td>
                <td>{data.cal}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
};

export default ShoppingDetails;