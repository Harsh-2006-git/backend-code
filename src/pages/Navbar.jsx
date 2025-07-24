import React from "react";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };
  if (localStorage.token) {
    return (
      <div style={styles.logoutContainer}>
        <button onClick={handleLogout} style={styles.logoutButton}>
          🔒 Logout
        </button>
      </div>
    );
  }
};
const styles = {
  logoutContainer: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 999,
  },
  logoutButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#f8eae8ff",
    color: "black",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",

    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};

export default Navbar;
