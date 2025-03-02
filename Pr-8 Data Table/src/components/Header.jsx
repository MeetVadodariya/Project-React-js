import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate("/view-all"); // Redirect to the books page after search
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="header">
      <div className="search-bar" style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "20px" }}>Bookstore Management</h1>
      </div>
      <div className="nav-links" style={{ marginTop: "10px" }}>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/add">Add Book</Link>
        <Link className="nav-link" to="/view-all">View All Books</Link>
      </div>
    </nav>
  );
};

export default Header;
