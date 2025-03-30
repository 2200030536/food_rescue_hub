import React, { useEffect, useState } from "react";
import axios from "./api";
import RegUserSideNav from "./regUserSideNav.jsx";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
    const [shoppingData, setShoppingData] = useState([]);
    const [userId, setUserId] = useState(null);
    const [newShoppingData, setNewShoppingData] = useState({
        userId: "",
        itemName: "",
        itemQuantity: "",
        purchaseDate: "",
        expiryDate: "",
        daysRemaining: "",
        status: false,
        category: "",
        cal: "",
    });
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewShoppingData({ ...newShoppingData, [name]: value });
    };

    const handlePostShoppingData = () => {
        // Calculate daysRemaining as the difference between expiryDate and the current date
        const expiryDate = new Date(newShoppingData.expiryDate);
        const currentDate = new Date();
        const timeDifference = expiryDate - currentDate;
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        // Update the newShoppingData object with the calculated daysRemaining
        const updatedShoppingData = { ...newShoppingData, daysRemaining };

        axios
            .post("/shopping-data", updatedShoppingData)
            .then(() => {
                alert("Shopping data posted successfully!");
                setNewShoppingData({
                    userId: "",
                    itemName: "",
                    itemQuantity: "",
                    purchaseDate: "",
                    expiryDate: "",
                    daysRemaining: "",
                    status: false,
                    category: "",
                    cal: "",
                });
                // Refresh shopping data
                axios.get(`/shopping-data/user/${userId}`).then((response) => {
                    setShoppingData(response.data);
                });
            })
            .catch(() => {
                alert("Failed to post shopping data. Please try again later.");
            });
    };
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
                <h3 className="mt-5">Post New Shopping Data</h3>
                <form>
                    <div className="form-group">
                        <label>User ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="userId"
                            value={userId}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>Item Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="itemName"
                            value={newShoppingData.itemName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            type="text"
                            className="form-control"
                            name="itemQuantity"
                            value={newShoppingData.itemQuantity}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Purchase Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="purchaseDate"
                            value={newShoppingData.purchaseDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="expiryDate"
                            value={newShoppingData.expiryDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            className="form-control"
                            name="category"
                            value={newShoppingData.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Calories</label>
                        <input
                            type="number"
                            className="form-control"
                            name="cal"
                            value={newShoppingData.cal}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={handlePostShoppingData}
                    >
                        Post Shopping Data
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddItems;