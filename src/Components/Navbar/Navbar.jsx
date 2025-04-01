import React, { useState } from "react";
import "./Navbar.css";
import Insta from "./insta.png";
import Telegram from "./telegram.png";
import Telephone from './telephone.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="Center-Nav">
                <a href="/"><p className="logo">DevSphere</p></a>
                {/* Hamburger Button */}
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
                <div className={`Nav-ul-link-center ${isOpen ? "active" : ""}`}>
                    <div className="Nav-ul-link-width">
                        <div className="nav-ul-links">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">About</a></li>
                                {/* <li><a href="#">Blogs</a></li> */}
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                    </div>    
                </div>
                <div className="Images">
                    <a href="https://www.instagram.com/devsphere.uz/">
                        <img width="40" src={Insta} alt="Instagram" />
                    </a>
                    <a href="https://t.me/JahongirFox">
                        <img width="40" src={Telegram} alt="Telegram" />
                    </a>
                    <a href="tel:+998908257503">
                        <img width="40" src={Telephone} alt="Telegram" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
