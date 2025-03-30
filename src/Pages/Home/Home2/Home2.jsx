import React from "react";
import './Home2.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'

function Home2() {
    return(
        <div className="Home2">
            <div className="Work">
                <p>Our Work</p>
            </div>
                    <div className="flex-images">
                        <a href="https://skywings-app.vercel.app/"><div className="Card1">
                            <div className="card">
                                <img style={{borderRadius:"20px"}} width={350} src={img2} alt="" /> <br />
                            </div>
                            <p>Skywings</p>
                        </div></a>
                        <a style={{textDecoration:"none"}} href="https://fasten.com/uz_uz"><div className="Card1">
                            <div className="card">
                                <img style={{borderRadius:"20px"}} width={350} src={img3} alt="" /> <br />
                            </div>
                            <p>Fasten Taxi</p>
                        </div></a>
                        <a href="https://surfing-eight.vercel.app/"><div className="Card1">
                            <div className="card">
                                <img style={{borderRadius:"20px"}} width={350} src={img4} alt="" /> <br />
                            </div>
                            <p>Surfing School</p>
                        </div></a>
                        <a href="https://www.chillpro.uz/"><div className="Card1">
                            <div className="card">
                                <img style={{borderRadius:"20px"}} width={350} src={img1} alt="" /> <br />
                            </div>
                            <p>ChillPro Service</p>
                        </div></a>
                    </div>
                </div>

    )
}
export default Home2;