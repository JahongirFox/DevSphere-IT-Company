import React from "react";
import './Home1.css';
import img from '../../../assets/img.png';
import { motion  } from "framer-motion";

function Home1() {
    const handleClick = () => {
        console.log("Связаться с нами кнопка нажата");
        // bu yerda navigatsiya yoki scroll funksiyasini chaqirishing mumkin
    };

    return (
        <div className="Home">
            <div className="Flex-to-center">
                <div className="Home-have-a-text-about-us">
                    <div className="Text-and-btn">
                        <p>
                            <span>DevSphere</span> - это онлайн IT - компания,<br />
                            которая занимается разработкой веб-сайтов
                            <br />
                            На сегодняшний день мы создали 20 успешных <br />
                            коммерческих проектов и получили множество<br />
                            довольных отзывов клиентов.
                        </p>

                        {/* Animatsiyali Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 90px rgb(37, 106, 255)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleClick}
                            className="animated-button">
                            Связаться с нами
                        </motion.button>
                    </div>

                    <div className="Home-have-a-text-about-us-img">
                        <img width={500} src={img} alt="" />
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