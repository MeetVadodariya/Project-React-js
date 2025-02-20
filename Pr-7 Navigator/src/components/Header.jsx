import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => (
  <nav className="header">
    <h1>Bookstore Management</h1>
    <div>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/add">Add Book</Link>
    </div>
  </nav>
);

export default Header;
