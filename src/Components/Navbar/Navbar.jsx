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
                    <a href="/">DevSphere</a>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={menuOpen ? "bar open" : "bar"}></span>
                    <span className={menuOpen ? "bar open" : "bar"}></span>
                    <span className={menuOpen ? "bar open" : "bar"}></span>
                </div>
                <div className={`Felx-Navbars ${menuOpen ? "open" : ""}`}>
                <div className="Nav-Link-cards">
                        {/* <ul>
                            <li><Link to="http://localhost:5173/" className="nav-link">Главная</Link></li>
                            <li><Link to="http://localhost:5173/aboutus" className="nav-link">О нас</Link></li>
                            <li><Link to="http://localhost:5173/works" className="nav-link">Наша работы</Link></li>
                        </ul> */}
                        <a className="nav-link" href="/">Главная</a>
                        <a className="nav-link" href="/aboutus">О нас</a>
                        <a className="nav-link" href="/works">Наша работы</a>
                        
                    </div>
                </div>
            </div>
            <div className="small-nav-card">
                    <div className="Nav-Link-cards">
                        <a className="nav-link" href="/">Главная</a>
                        <a className="nav-link" href="/aboutus">О нас</a>
                        <a className="nav-link" href="/works">Наша работы</a>
                    </div>
                </div>
        </nav>
    );
}

export default Navbar;