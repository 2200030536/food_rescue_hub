import React, { useEffect, useState } from "react";
import axios from "./api";
import { listUserDonations, deleteDonation } from "../services/DonationService";
import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";

const MyDonations = () => {

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [donorId, setDonorId] = useState(null); // State to hold donorId
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/auth/user/details");
        console.log("User details fetched:", response.data); // Debugging

        if (response.data && response.data.id) {
          setDonorId(response.data.id); // Set donorId
        } else {
          console.error("User ID not found in response.");
          alert("Failed to fetch user ID. Please log in again.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
        navigate("/login"); // Redirect to login if session is invalid
      }
    };

    fetchUserDetails();
  }, [navigate]);

  useEffect(() => {
    if (donorId) {
      // Fetch donations only after donorId is set
      listUserDonations(donorId)
        .then((response) => {
          setDonations(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to fetch your donations. Please try again later.");
          setLoading(false);
        });
    }
  }, [donorId]);

  const handleEdit = (id) => {
    navigate(`/editDonation/${id}`); // Navigate to the edit donation page
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this donation?")) {
      deleteDonation(id)
        .then(() => {
          alert("Donation deleted successfully!");
          setDonations((prevDonations) =>
            prevDonations.filter((donation) => donation.id !== id)
          );
        })
        .catch((error) => {
          alert("Failed to delete donation. Please try again later.");
          console.error(error);
        });
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading your donations...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  return (
    <>
      <UserHeader />
      <div className="container mt-4">
        <h2 className="text-center">My Donations</h2>
        {donations.length > 0 ? (
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Address</th>
                <th>Phone</th>
                <th>Post Date</th>
                <th>Reciver Id</th>
                <th>Claim Date</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.address}</td>
                  <td>{donation.alternateContact}</td>
                  <td>{donation.postDate}</td>
                  <td>{donation.receiverId}</td>
                  <td>{donation.claimDate}</td>
                  <td>{donation.quantity}</td>
                  <td>
                    {donation.availabilityStatus ? "Available" : "Not Available"}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm mr-2"
                      onClick={() => handleEdit(donation.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(donation.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center">You have not posted any donations yet.</div>
        )}
      </div>
    </>
  );
};

export default MyDonations;
