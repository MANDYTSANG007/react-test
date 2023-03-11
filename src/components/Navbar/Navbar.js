import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <img
                src={require(`../../assets/mt-logo.png`)}
                alt="Mandy logo"
                className="mandy"
                onClick={() => {
                    navigate("/");
                }}
            />
            <img
                src={require(`../../assets/${navbar ? "x-white" : "menu-white"}.png`)}
                alt="menu icon"
                className="menu-icon"
                onClick={() => {
                    setNavbar(!navbar);
                }}
            />
            <ul className="directories">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/test"> Test </Link></li>
            </ul>
            <div className="mobile-navbar" style={{ left: navbar ? "0%" : "-70% " }}>
                <p style={{ padding: "0vh 3vh", color: "white"}}>Menu</p>
                <ul className="mobile-directories">
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/test"> Test </Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;