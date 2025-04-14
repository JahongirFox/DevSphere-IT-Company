import React from "react";
import './Home1.css';
import img from '../../../assets/img.png';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function Home1() {
    const navigate = useNavigate(); // React Router hook

    const handleClick = () => {
        console.log("Связаться с нами кнопка нажата");
        navigate('/contactus'); // Navigate to contact page
    };

    return (
        <div className="Home">
            <div className="Flex-to-center">
                <div className="Home-have-a-text-about-us">
                    <div className="Home-have-a-text-about-us-img">
                        <img width={500} src={img} alt="DevSphere" />
                    </div>
                    <div className="Text-and-btn">
                        <p>
                            <span>DevSphere</span> - это онлайн IT-компания,<br />
                            которая занимается разработкой веб-<br />сайтов.
                            На сегодняшний день мы создали <br /> много успешных
                            коммерческих проектов <br /> и получили множество
                            довольных <br /> отзывов клиентов.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 90px rgb(37, 106, 255)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleClick}
                            className="animated-button">
                            Связаться с нами
                        </motion.button>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 90px rgb(37, 106, 255)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleClick}
                        className="animated-button2">
                        Связаться с нами
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Home1;
