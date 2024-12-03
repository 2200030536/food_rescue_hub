import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDonation = () => {
  const [donation, setDonation] = useState({
    donorId: "",
    receiverId: null,
    postDate: "",
    claimDate: null,
    availabilityStatus: true,
    quantity: "",
    alternateContact: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonation({
      ...donation,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/donations", donation)
      .then(() => {
        alert("Donation posted successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert("Error posting donation!");
        console.error(error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Post a Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Donor ID:</label>
          <input
            type="number"
            name="donorId"
            className="form-control"
            value={donation.donorId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Post Date:</label>
          <input
            type="date"
            name="postDate"
            className="form-control"
            value={donation.postDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            value={donation.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Alternate Contact:</label>
          <input
            type="text"
            name="alternateContact"
            className="form-control"
            value={donation.alternateContact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            className="form-control"
            value={donation.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="availabilityStatus"
              checked={donation.availabilityStatus}
              onChange={handleChange}
            />{" "}
            Available
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default AddDonation;
