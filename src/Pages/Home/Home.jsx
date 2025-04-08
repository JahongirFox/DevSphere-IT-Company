import React from "react";
import './Home.css'
import img from '../../assets/img.png'
import { SpeedInsights } from "@vercel/speed-insights/react";

function Home() {
    return(
        <div className="Home">
            <div className="Flex-to-center">
                <div className="Home-have-a-text-about-us">
                        <p>DevSphere - это онлайн IT-компания,<br /> которая занимается разработкой веб-сайтов<div className="br"></div> На сегодняшний день мы создали 20 успешных <br /> коммерческих проектов и получили множество<br />  довольных отзывов клиентов.</p>
                        <div className="Home-have-a-text-about-us-img">
                            <img width={300} src={img} alt="" />    
                        </div>
                </div>  
            </div>
        </div>
    )
}

export default Home;