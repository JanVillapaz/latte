import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1>Budget Management</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </nav>
    );
};

export default Navbar;
