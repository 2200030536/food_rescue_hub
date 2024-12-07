import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaDonate, FaSignOutAlt } from "react-icons/fa";

const UserHeader = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleSidebarClick = (e) => {
    // Prevent the sidebar toggle when clicking on links
    if (e.target.tagName !== "A") {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: '0em 0',
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
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
            padding: "0.5em",
            transition: "transform 0.3s ease",
            transform: isSidebarOpen ? "rotate(90deg)" : "rotate(0)",
          }}
        >
          ☰
        </button>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Food Waste Management
        </div>

        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "18px",
            padding: "0.5em 1em",
            border: "1px solid white",
            borderRadius: "5px",
          }}
        >
          Profile
        </Link>
      </nav>

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: "2em", // Push sidebar content below the navbar
          left: 0,
          width: isSidebarOpen ? "250px" : "50px", // Minimal size when closed
          height: "calc(100vh - 4em)",
          backgroundColor: "#4CAF50",
          color: "white",
          transition: "width 0.5s ease",
          overflow: "hidden",
          zIndex: 1000,
        }}
        onClick={handleSidebarClick} // Click event to toggle the sidebar
      >
        <ul style={{ listStyle: "none", padding: "1em 0", margin: 0 }}>
          <li style={{ padding: "1em", display: "flex", alignItems: "center" }}>
            <FaHome
              style={{
                marginRight: isSidebarOpen ? "10px" : "0",
                transition: "margin-right 0.3s ease",
              }}
            />
            {isSidebarOpen && (
              <Link
                to="/mydonations"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                My Donations
              </Link>
            )}
          </li>
          <li style={{ padding: "1em", display: "flex", alignItems: "center" }}>
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
            <FaDonate
              style={{
                marginRight: isSidebarOpen ? "10px" : "0",
                transition: "margin-right 0.3s ease",
              }}
            />
            {isSidebarOpen && (
              <Link
                to="/donations"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                All Donation Posts
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
                Logout
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserHeader;
