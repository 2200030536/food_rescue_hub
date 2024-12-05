import React, { useEffect, useState } from 'react';
import { listDonations } from '../services/DonationService';
import { useNavigate } from 'react-router-dom';
import UserHeader from './UserHeader';

const ListFoodDonations = () => {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    listDonations()
      .then((response) => {
        setDonations(response.data);
        setFilteredDonations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch donations. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const filtered = donations.filter((donation) =>
      (donation.donorId?.toString().toLowerCase().includes(query) ||
      donation.address?.toLowerCase().includes(query))
    );
    setFilteredDonations(filtered);
  };

  const addDonations = () => {
    navigate('/addDonations');
  };

  if (loading) {
    return <div className="text-center mt-5">Loading donations...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  return (
    <>
    <UserHeader/>
    <div className="container mt-4">
      <h2 className="text-center">List of Food Donations</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button type="button" className="btn btn-primary" onClick={addDonations}>
          Post Donation
        </button>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by Donor ID or Address"
          value={search}
          onChange={handleSearch}
          />
      </div>
      {filteredDonations.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>DONOR ID</th>
              <th>Address</th>
              <th>Phone</th>
              <th>POST DATE</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.donorId}</td>
                <td>{donation.address}</td>
                <td>{donation.alternateContact}</td>
                <td>{donation.postDate}</td>
                <td>{donation.quantity}</td>
                <td>{donation.availabilityStatus ? 'Available' : 'Not Available'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">No donations found matching your search criteria.</div>
      )}

    </div>
      </>
  );
};

export default ListFoodDonations;
