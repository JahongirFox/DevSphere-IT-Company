import React from "react";
import './About1.css'
import startup from '../../../assets/startup.png'

function About1() {
    return(
        <div className="About1">
            <div className="About1-text">
                 <img width={350} src={startup} alt="" />
                <p>В <span>DevSphere</span> мы расширяем <br /> возможности бизнеса и стартапов, <br /> создавая динамические веб-сайты. <br /> Наши индивидуальные решения <br /> обеспечивают результаты, улучшают <br /> пользовательский опыт и максимизи- <br />руют прибыльность.</p>
            </div>
        </div>
    )
}

export default About1;