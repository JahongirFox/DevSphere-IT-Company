import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="flex-nav">
        <a href="http://localhost:3000/">
          <div className="nav-logo">
            <p>Dev<span>Sphere</span></p>
          </div>
        </a>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}</button>
        <div className={isOpen ? "nav-a open" : "nav-a"}>
          <a href="#home">Bosh Sahifa</a>
          <p>|</p>
          <a href="#about">Sayt Yaratish</a>
          <p>|</p>
          <a href="#services">Googleda Reklama</a>
          <p>|</p>
          <a href="#contact">SEO Optimallashtirish</a>
          <p>|</p>
          <a href="#contact">Narxlar</a>
          <p>|</p>
          <a href="#contact">Buyurtma Berish</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;