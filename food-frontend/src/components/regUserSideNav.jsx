import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Install using `npm install framer-motion`
import { FaPlus, FaList, FaUtensils, FaUser, FaSignOutAlt } from "react-icons/fa";

const RegUserSideNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <motion.div
        className="sidebar"
        initial={{ width: isSidebarOpen ? "50px" : "250px" }}
        animate={{ width: isSidebarOpen ? "250px" : "50px" }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          backgroundColor: "#4CAF50",
          color: "white",
          overflow: "hidden",
          zIndex: 1000,
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <motion.button
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <motion.li
            style={{ padding: "1em", display: "flex", alignItems: "center" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.li>
          <motion.li
            style={{ padding: "1em", display: "flex", alignItems: "center" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.li>
          <motion.li
            style={{ padding: "1em", display: "flex", alignItems: "center" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.li>
          <motion.li
            style={{ padding: "1em", display: "flex", alignItems: "center", marginTop: "auto" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.li>
          <motion.li
            style={{ padding: "1em", display: "flex", alignItems: "center" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.li>
        </ul>
      </motion.div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: isSidebarOpen ? "250px" : "50px",
          transition: "margin-left 0.5s ease",
          padding: "20px",
          width: "100%",
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the User Dashboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Select an option from the sidebar to get started.
        </motion.p>
      </div>
    </div>
  );
};

export default RegUserSideNav;