import React, { useEffect, useState } from 'react';
import { listDonations } from '../services/DonationService';
import { useNavigate } from 'react-router-dom';
const ListFoodDonations = () => {
  // Example data
  //   const donations = [
  //     {
  //       id: 1,
  //       name: "Ram",
  //       address: "Address 1",
  //       phone: "1234567890",
  //       foodType: "Vegetarian",
  //       quantity: 10,
  //       status: "Pending",
  //     },
  //     {
  //       id: 2,
  //       name: "Shyam",
  //       address: "Address 2",
  //       phone: "9876543210",
  //       foodType: "Non-Vegetarian",
  //       quantity: 15,
  //       status: "Completed",
  //     },
  //     {
  //       id: 3,
  //       name: "Sita",
  //       address: "Address 3",
  //       phone: "1122334455",
  //       foodType: "Mixed",
  //       quantity: 8,
  //       status: "In Progress",
  //     },
  //   ];

  // State to hold the filtered donations
  const [donations, setDonations] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    listDonations().then((response) => {
      setDonations(response.data);
    }).catch((error) => {
      console.log(error);

    })
  }, [])

  function addDonations() {
    navigator('/addDonations');
  }



  return (
    <div className="container mt-4">
      <h2 className="text-center">List of Food Donations</h2>
      <button type="button" class="btn btn-primary" onClick={addDonations}>Post Donation</button>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>DONOR ID</th>
            {/* <th>Name</th> */}
            <th>Address</th>
            <th>Phone</th>
            <th>POST DATE</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.donorId}</td>
              {/* <td>{donation.name}</td> */}
              <td>{donation.address}</td>
              <td>{donation.alternateContact}</td>
              <td>{donation.postDate}</td>
              <td>{donation.quantity}</td>
              <td>{donation.availabilityStatus ? 'Available' : 'Not Available'}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListFoodDonations;
