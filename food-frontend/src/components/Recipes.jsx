import React, { useEffect, useState } from "react";
import axios from "./api";
import RegUserSideNav from "./regUserSideNav.jsx";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
    const [shoppingData, setShoppingData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [userId, setUserId] = useState(null);

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
                    setError("Failed to fetch shopping details.");
                    setLoading(false);
                });
        }
    }, [userId]);

    const handleCheckboxChange = (item) => {
        setSelectedItems((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    const generateRecipe = () => {
        if (selectedItems.length === 0) {
            alert("Please select at least one ingredient.");
            return;
        }

        // Simple logic to generate a recipe based on selected ingredients
        let base = "";
        if (selectedItems.includes("Rice")) base = "Rice Bowl";
        else if (selectedItems.includes("Bread")) base = "Sandwich";
        else if (selectedItems.includes("Pasta")) base = "Pasta Dish";
        else base = "Mixed Dish";

        const recipeText = `Here is your recipe: ${base} with ${selectedItems.join(", ")}. Cook together and enjoy!`;
        setRecipe(recipeText);
    };

    if (loading) return <div className="text-center mt-5">Loading...</div>;
    if (error) return <div className="text-center text-danger">{error}</div>;

    return (
        <>
            <RegUserSideNav />
            <div className="container mt-4">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoppingData
                            .filter((data) => data.category === "Food") // Filter items with category "Food"
                            .map((data) => (
                                <tr key={data.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            onChange={() => handleCheckboxChange(data.itemName)}
                                        />
                                    </td>
                                    <td>{data.itemName}</td>
                                    <td>{data.itemQuantity}</td>
                                    <td>{data.cal}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <button className="btn btn-primary mt-3" onClick={generateRecipe}>
                    Generate Recipe
                </button>
                {recipe && (
                    <div className="mt-4 p-3 border rounded bg-light">
                        <h5>Generated Recipe:</h5>
                        <p>{recipe}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Recipes;