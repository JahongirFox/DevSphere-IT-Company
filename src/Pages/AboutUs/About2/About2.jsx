import React from "react";
import './About2.css';
import Il from '../../../assets/I.png';
import umar from '../../../assets/umar.jpg';
import saloh from '../../../assets/saloh.jpg';

function About2() {
    return (
        <div className="About2">
            <p className="title">Наша команда</p>
            <div className="team-cards">
                <div className="card">
                    <img src={Il} alt="Жахонгир Рахматжонов" />
                    <p>Жахонгир Рахматжонов</p>
                </div>
                <div className="card">
                    <img src={umar} alt="Умаржон Зохиджонов" />
                    <p>Умаржон Зохиджонов</p>
                </div>
                <div className="card">
                    <img src={saloh} alt="Иброхимов Салохиддин" />
                    <p>Иброхимов Салохиддин</p>
                </div>
                <div className="card">
                    <img src={Il} alt="Иброхимов Салохиддин" />
                    <p>Иброхимов Салохиддин</p>
                </div>
            </div>
        </div>
    );
}

export default About2;
