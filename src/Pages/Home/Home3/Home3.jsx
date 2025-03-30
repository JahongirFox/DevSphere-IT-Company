import React from "react";
import './Home3.css'
import request from './request.png'
import jadval from './jadva.png'
import jas from './jasdasd.png'
import develop from './design.png'
function Home3() {
    return(
        <div className="Home3">
            <div className="Home3-Container">
                <p >You're just 5 steps away <br /> from launching your Website !</p>
            </div>
            <div className="center-media">
                <div className="Home3-card">
                    <div className="Img-center">
                        <img width={60} src={request} alt="" />
                    </div>
                    <div className="Home3-text-request">
                        <h5 class="heading-design">Request</h5>
                        <p>Submit your request</p>
                    </div>
                </div>
                <div className="Home3-card">
                    <div className="Img-center">
                        <img width={60} src={jadval} alt="" />
                    </div>
                    <div className="Home3-text-request">
                        <h5 class="heading-design">Estimate</h5>
                        <p>Get an estimate asap</p>
                    </div>
                </div>
                <div className="Home3-card">
                    <div className="Img-center">
                        <img width={60} src={jas} alt="" />
                    </div>
                    <div className="Home3-text-request">
                        <h5 class="heading-design">Design</h5>
                        <p>Send Figma/XD file, <br /> or we can design it <br />  for yout</p>
                    </div>
                </div>
                <div className="Home3-card">
                    <div className="Img-center">
                        <img width={60} src={develop} alt="" />
                    </div>
                    <div className="Home3-text-request">
                        <h5 class="heading-design">Develop</h5>
                        <p>We'll start Development <br /> of the project</p>
                    </div>
                </div>
                <div className="Home3-card">
                    <div className="Img-center">
                        <img width={60} src={request} alt="" />
                    </div>
                    <div className="Home3-text-request">
                        <h5 class="heading-design">Deliver</h5>
                        <p>Pay remainder only <br /> when 100%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3