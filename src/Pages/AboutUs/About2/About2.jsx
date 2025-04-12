import React from "react";
import './About2.css'
import Il from '../../../assets/I.png'

function About2() {
    return(
        <div className="About2">
                <p>Наша команда</p>
            <div className="center-about2">
                <div className="Felx-about-cards">
                    <div className="card-bord">
                        <div className="card">
                            <img width={300} src={Il} alt="" /> <br />
                            <p>Жахонгир Рахматжонов</p>
                        </div>
                    </div>
                    <div className="card-bord">
                        <div className="card">
                            <img width={300} src={Il} alt="" /> <br />
                            <p>Жахонгир Рахматжонов</p>
                        </div>
                    </div>
                    <div className="card-bord">
                        <div className="card">
                            <img width={300} src={Il} alt="" /> <br />
                            <p>Иброхимов Салохиддин</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2