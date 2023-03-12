import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img
                    src={require("../../assets/mt-logo.png")}
                    alt="logo"
                    className="footer-logo"
                />
                <div className="footer-nav">
                    <div className="footer-column">
                        <h5 className="footer-title"> Menu </h5>
                        <ul className="footer-list">
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/test"> Test </Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h5 className="footer-title"> Social Media </h5>
                        <ul className="footer-list">
                            <li><a href="https://github.com/MANDYTSANG007" target="_blank" rel="noopener noreferrer"> GitHub </a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <h5> Site design / logo @Mandy Tsang 2023. All rights reserved. </h5>
                </div>
            </div>
        </footer>
    )
}
export default Footer;