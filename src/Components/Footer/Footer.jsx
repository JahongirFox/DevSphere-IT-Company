import React from "react";
import "./Footer.css";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>DevSphere</h2>
                    <p>Мы создаём профессиональные сайты для вашего бизнеса.</p>
                </div>

                <div className="footer-links">
                    <h4>Навигация</h4>
                    <ul>
                        <li><Link to="/aboutus">О нас</Link></li>
                        <li><Link to="/works">Наши работы</Link></li>
                        <li><Link to="/contact">Контакты</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Контакты</h4>
                    <p>Email: raxmatjonovjahongir5@gmail.com</p>
                    <p>Телефон: <a className="phone-link" href="tel:+998908257503">+998 90 825 75 03</a></p>
                    <p>Адрес: Ташкент, Узбекистан</p>
                    <div className="footer-socials">
                        <a href="https://t.me/raxmatjonoww" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane />
                        </a>
                        <a href="https://wa.me/998908257503" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/devsphere.coding/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} DevSphere. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;
