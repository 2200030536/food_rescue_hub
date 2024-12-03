import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
    const { state } = useLocation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id = state?.id; // Extract id from state passed via navigation

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:8080/users/${id}`)
                .then((response) => {
                    setUser(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError("Error fetching user data");
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>No user found</div>;
    }

    return (
        <div className="container mt-5">
            <h2>User Profile</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Contact: {user.contact}</p>
                    <button className="btn btn-primary">Edit Password</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
