import React from "react";
import './Home2.css';
import comand from '../../../assets/comand.png';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Home2() {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = () => {
        // Log when button is clicked (optional)
        console.log("Связаться с нами кнопка нажата");

        // Navigate to the About Us page
        navigate('/aboutus');
    };

    return (
        <div className="Home2">
            <div className="Home2-text">
                <div className="Home2-text-btns">
                    <div className="Home2-text-img">
                        <img width={450} src={comand} alt="" />
                    </div>
                    <div className="flex-ramp">
                        <p>
                            <span>Мы — команда</span> опытных ,<br />
                            разработчиков, стремящихся ,<br />
                            оснастить ваш бизнес инновац- <br />
                            ионными и высокоэффективными <br />
                            технологическими, решениями.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 90px rgb(37, 106, 255)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleClick}
                            className="animated-button">
                            Узнайте О нас
                        </motion.button>
                    </div>  
                </div>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 90px rgb(37, 106, 255)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="animated-button2">
                    Узнайте О нас
                </motion.button>
            </div>
        </div>
    );
}

export default Home2;
