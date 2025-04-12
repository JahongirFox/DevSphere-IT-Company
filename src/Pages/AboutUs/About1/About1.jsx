import React from "react";
import './About1.css'
import startup from '../../../assets/startup.png'

function About1() {
    return(
        <div className="About1">
            <div className="About1-text">
                <p>В <span>DevSphere</span> мы расширяем <br /> возможности бизнеса и стартапов, <br /> создавая динамические веб-сайты. <br /> Наши индивидуальные ик
                 решения <br /> обеспечиваютрезультаты, улучшают <br /> пользовательский опыт и максимизи- <br />руют прибыльность.</p>
                 <img width={350} src={startup} alt="" />
            </div>
        </div>
    )
}

export default About1;