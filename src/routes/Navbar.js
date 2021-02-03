import React from 'react'
import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="list">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar
