import React from "react";
import './About1.css'
import me from './photo_2025-04-01_18-14-05.jpg'

function About1() {
    return(
        <div className="About1">
            <div className="About1-text">
                <p>At DevSphere, we empower businesses <br /> and startups by crafting dynamic websites.<br /> Our tailored solutions drive results, elevate user <br /> experiences, and maximize profitability.</p>
            </div>
            <div className="center-ab">
                <div className="Center-about">
                    <div className="About-cards">
                        <div className="About-cards-img">
                            <img width={300} src={me} alt="" />
                        </div>
                        <div className="About-cards-text">
                            <p>Jahongir Raxmatjonov</p>
                            <h4>Co-Founder & CEO</h4>
                        </div>
                    </div>
                    <div className="About-cards">
                        <div className="About-cards-img">
                            <img width={300} src={me} alt="" />
                        </div>
                        <div className="About-cards-text">
                            <p>Jahongir Raxmatjonov</p>
                            <h4>Co-Founder & CEO</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About1