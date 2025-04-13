import React from "react";
import './About2.css';
import Il from '../../../assets/I.png';
import umar from '../../../assets/umar.jpg';
import saloh from '../../../assets/saloh.jpg';
import eldos from '../../../assets/eldos.jpg';

function About2() {
    return (
        <div className="About2">
            <p className="title">Наша команда</p>
            <div className="team-cards">
                <div className="card">
                    <a href="https://www.instagram.com/raxmatjonoww/">
                        <img src={Il} alt="Жахонгир Рахматжонов" />
                        <p>Жахонгир <br /> Рахматжонов</p>
                        <h4 className="position">Full-Stack Developer</h4>
                    </a>
                </div>

                <div className="card">
                    <a href="https://www.instagram.com/the.dosik55/">
                        <img src={eldos} alt="Елдос Ержанов" />
                        <p>Елдос <br /> Ержанов</p>
                        <h4 className="position">Full-Stack Developer</h4>
                    </a>
                </div>

                <div className="card">
                    <a href="https://www.instagram.com/z.u.b_06/">
                        <img src={umar} alt="Умаржон Зохиджонов" />
                        <p>Умаржон <br /> Зохиджонов</p>
                        <h4 className="position">Web-Designer</h4>
                    </a>
                </div>

                <div className="card">
                    <a href="https://www.instagram.com/_ibrkhmv___/">
                        <img src={saloh} alt="Иброхимов Салохиддин" />
                        <p>Иброхимов <br /> Салохиддин</p>
                        <h4 className="position">Frontend Developer</h4>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About2;
