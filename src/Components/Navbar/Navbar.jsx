import React, { useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom'
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="Flex-Two-Navbars" >
                <div className="navbar-p">
                    <p>DevSphere</p>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={menuOpen ? "bar open" : "bar"}></span>
                    <span className={menuOpen ? "bar open" : "bar"}></span>
                    <span className={menuOpen ? "bar open" : "bar"}></span>
                </div>
                <div className={`Felx-Navbars ${menuOpen ? "open" : ""}`}>
                <div className="Nav-Link-cards">
                        <ul>
                            <li><Link to="/" className="nav-link">Главная</Link></li>
                            <li><Link to="/aboutus" className="nav-link">О нас</Link></li>
                            <li><Link to="/work" className="nav-link">Наша работы</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="small-nav-card">
                    <div className="Nav-Link-cards">
                        <ul>
                            <li><Link to="/" className="nav-link">Главная</Link></li>
                            <li><Link to="/aboutus" className="nav-link">О нас</Link></li>
                            <li><Link to="/work" className="nav-link">Наша работы</Link></li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
}

export default Navbar;