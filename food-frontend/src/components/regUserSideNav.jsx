import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaList, FaUtensils, FaUser, FaSignOutAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const RegUserSideNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isSidebarOpen ? "250px" : "50px",
          height: "100vh",
          backgroundColor: "#4CAF50",
          color: "white",
          transition: "width 0.5s ease",
          overflow: "hidden",
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleSidebar}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            padding: "1em",
            width: "100%",
            textAlign: "left",
          }}
        >
          ☰
        </button>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ padding: "1em", display: "flex", alignItems: "center" }}>
            <FaPlus
              style={{
                marginRight: isSidebarOpen ? "10px" : "0",
                transition: "margin-right 0.3s ease",
              }}
            />
            {isSidebarOpen && (
              <Link
                to="/additems"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Add Item
              </Link>
            )}
          </li>
          <li style={{ padding: "1em", display: "flex", alignItems: "center" }}>
            <FaList
              style={{
                marginRight: isSidebarOpen ? "10px" : "0",
                transition: "margin-right 0.3s ease",
              }}
            />
            {isSidebarOpen && (
              <Link
                to="/shopping-details"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                See List
              </Link>
            )}
          </li>
          <li style={{ padding: "1em", display: "flex", alignItems: "center" }}>
            <FaUtensils
              style={{
                marginRight: isSidebarOpen ? "10px" : "0",
                transition: "margin-right 0.3s ease",
              }}
            />
            {isSidebarOpen && (
              <Link
                to="/make-recipes"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Make Recipes
              </Link>
            )}
          </li>
          <li style={{ padding: "1em", display: "flex", alignItems: "center", marginTop: "auto" }}>
            <FaUser
              style={{
                marginRight: isSidebarOpen ? "10px" : "0",
                transition: "margin-right 0.3s ease",
              }}
            />
            {isSidebarOpen && (
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Profile
              </Link>
            )}
          </li>
          <li style={{ padding: "1em", display: "flex", alignItems: "center" }}>
            <FaSignOutAlt
              style={{
                marginRight: isSidebarOpen ? "10px" : "0",
                transition: "margin-right 0.3s ease",
              }}
            />
            {isSidebarOpen && (
              <Link
                to="/logout"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                Log Out
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: isSidebarOpen ? "250px" : "50px",
          transition: "margin-left 0.5s ease",
          padding: "20px",
          width: "100%",
        }}
      >
        <h1>Welcome to the User Dashboard</h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default RegUserSideNav;