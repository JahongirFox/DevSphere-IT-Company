import React, { useState } from "react";
import './Navbar.css';

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
                    <div className="Nav-Link">
                        <a href="/">Главная</a>
                        <a href="/aboutus">О нас</a>
                        <a href="/">Наша работы</a>
                    </div>
                </div>
            </div>
            <div className="small-nav-card">
                <div className="Nav-Link-cards">
                            <a href="/">Главная</a>
                            <a href="/aboutus">О нас</a>
                            <a href="/">Наша работы</a>
                        </div>
                </div>
        </nav>
    );
}

export default Navbar;