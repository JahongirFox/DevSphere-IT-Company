import React from "react";
import './Works.css';
import bek from '../../../assets/Our-Work-IMG/beket.png'
import kia from '../../../assets/Our-Work-IMG/kia.jpg';
import chillpro from '../../../assets/Our-Work-IMG/chillpro.jpg';
import fasten from '../../../assets/Our-Work-IMG/fasten.jpg';
import skywing from '../../../assets/Our-Work-IMG/sky.jpg';
import surf from '../../../assets/Our-Work-IMG/surfing.jpg';
import weed from '../../../assets/Our-Work-IMG/weestep.jpg';
import tom from '../../../assets/Our-Work-IMG/tom.jpg'

function Works() {
    return (
        <div className="Works">
            <p>Веб-Сайты, <br />Которые мы создали;</p>
            
            <div className="Works-Flex-the-cards">
                <a href="https://kia.uz/" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={kia} alt="KIA" />
                        <div className="Works-info">
                            <p>Kia</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>

                <a href="https://www.chillpro.uz/" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={chillpro} alt="ChillPro" />
                        <div className="Works-info">
                            <p>ChillPro</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>

                <a href="https://fasten.com/ru_uz" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={fasten} alt="Fasten" />
                        <div className="Works-info">
                            <p>Fasten</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>
            </div>

            <div className="Works-Flex-the-cards">
                <a href="https://skywings-studio.vercel.app/" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={skywing} alt="Skywing" />
                        <div className="Works-info">
                            <p>Skywings</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>

                <a href="https://surfing-school.vercel.app/" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={surf} alt="Surfing" />
                        <div className="Works-info">
                            <p>Surfing</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>

                <a href="https://weestep-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={weed} alt="Weestep" />
                        <div className="Works-info">
                            <p>Weestep</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="Works-Flex-the-cards">
                <a href="https://tomato-cafe.vercel.app/" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={tom} alt="Skywing" />
                        <div className="Works-info">
                            <p>Tomato</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>

                <a href="https://ersultan-beket.vercel.app/" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={bek} alt="Surfing" />
                        <div className="Works-info">
                            <p>Math School</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a>

                {/* <a href="https://weestep-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="Works-link">
                    <div className="Works-cards">
                        <img src={weed} alt="Weestep" />
                        <div className="Works-info">
                            <p>Weestep</p>
                            <button className="Works-button">Веб-сайт</button>
                        </div>
                    </div>
                </a> */}
            </div>
        </div>
    );
}

export default Works;
