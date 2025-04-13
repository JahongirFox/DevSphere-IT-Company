import React from "react";
import './About2.css';
import Il from '../../../assets/I.png';
import umar from '../../../assets/umar.jpg';
import saloh from '../../../assets/saloh.jpg';
import eldos from '../../../assets/eldos.jpg'

function About2() {
    return (
        <div className="About2">
            <p className="title">Наша команда</p>
            <div className="team-cards">
                <div className="card">
                    <img src={Il} alt="Жахонгир Рахматжонов" />
                    <p>Жахонгир <br /> Рахматжонов</p>
                </div>
                <div className="card">
                    <img src={umar} alt="Умаржон Зохиджонов" />
                    <p>Умаржон<br /> Зохиджонов</p>
                </div>
                <div className="card">
                    <img src={saloh} alt="Иброхимов Салохиддин" />
                    <p>Иброхимов <br /> Салохиддин</p>
                </div>
                <div className="card">
                    <img src={eldos} alt="Елдос Ержанов" />
                    <p>Елдос <br /> Ержанов</p>
                </div>
            </div>
        </div>
    );
}

export default About2;
