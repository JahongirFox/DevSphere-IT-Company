import React from "react";
import './Home3.css';
import kia from '../../../assets/Our-Work-IMG/kia.jpg';
import chillpro from '../../../assets/Our-Work-IMG/chillpro.jpg';
import fasten from '../../../assets/Our-Work-IMG/fasten.jpg';
import { Link } from 'react-router-dom';

function Home3() {
    return (
        <div className="Home3">
            <h2 className="Home3-title">Наши работы :</h2>

            <div className="Home3-Flex-the-cards">
                <a href="https://kia.uz/" target="_blank" rel="noopener noreferrer" className="Home3-link">
                    <div className="Home3-cards">
                        <img src={kia} alt="KIA" />
                        <div className="Home3-info">
                            <p>Kia</p>
                            <button className="Home3-site-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>

                <a href="https://www.chillpro.uz/" target="_blank" rel="noopener noreferrer" className="Home3-link">
                    <div className="Home3-cards">
                        <img src={chillpro} alt="ChillPro" />
                        <div className="Home3-info">
                            <p>ChillPro</p>
                            <button className="Home3-site-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>

                <a href="https://fasten.com/ru_uz" target="_blank" rel="noopener noreferrer" className="Home3-link">
                    <div className="Home3-cards">
                        <img src={fasten} alt="Fasten" />
                        <div className="Home3-info">
                            <p>Fasten</p>
                            <button className="Home3-site-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>
            </div>

            <div className="Link-Home3">
                <Link to="/works" className="Home3-button-link">
                    <button className="Home3-button">
                        СМОТРЕТЬ БОЛЬШЕ РАБОТ
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home3;
