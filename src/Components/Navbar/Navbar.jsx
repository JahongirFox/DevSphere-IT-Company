// import React from "react";
// import './Navbar.css'
// import Insta from './insta.png'
// import Telegram from './telegram.png'

// function Navbar() {
//     return(
//         <nav>
//             <div className="Center-Nav">
//                 <p>DevSphere</p>
//                 <div className="Nav-ul-link-center">
//                     <div className="Nav-ul-link-width">
//                         <div className="nav-ul-links">
//                             <ul><link rel="stylesheet" href="" />Home</ul>
//                             <ul><link rel="stylesheet" href="" />About</ul>
//                             <ul><link rel="stylesheet" href="" />Works</ul>
//                             <ul><link rel="stylesheet" href="" />Blogs</ul>
//                             <ul><link rel="stylesheet" href="" />Contacts</ul>
//                             <a href="https://www.instagram.com/devsphere.uz/"><img width={"40"} src={Insta} alt="" /></a>
//                             <a href="https://t.me/JahongirFox"><img width={"40"} src={Telegram} alt="" /></a>
//                         </div>
//                     </div>    
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar

import React, { useState } from "react";
import "./Navbar.css";
import Insta from "./insta.png";
import Telegram from "./telegram.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="Center-Nav">
                <p className="logo">DevSphere</p>
                {/* Hamburger Button */}
                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
                <div className={`Nav-ul-link-center ${isOpen ? "active" : ""}`}>
                    <div className="Nav-ul-link-width">
                        <div className="nav-ul-links">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
