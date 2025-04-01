import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Insta from "./insta.png";
import Telegram from "./telegram.png";
import Telephone from "./telephone.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="Center-Nav">
                <Link to="/"><p className="logo">DevSphere</p></Link>
                {/* Hamburger Button */}
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
                <div className={`Nav-ul-link-center ${isOpen ? "active" : ""}`}>
                    <div className="Nav-ul-link-width">
                        <div className="nav-ul-links">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contacts</Link></li>
                            </ul>
                        </div>
                    </div>    
                </div>
                <div className="Images">
                    <a href="https://www.instagram.com/devsphere.uz/" target="_blank" rel="noopener noreferrer">
                        <img width="40" src={Insta} alt="Instagram" />
                    </a>
                    <a href="https://t.me/JahongirFox" target="_blank" rel="noopener noreferrer">
                        <img width="40" src={Telegram} alt="Telegram" />
                    </a>
                    <a href="tel:+998908257503">
                        <img width="40" src={Telephone} alt="Telephone" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
