import React from "react";
import './Home3.css'
import kia from '../../../assets/Our-Work-IMG/kia.jpg'
import chillpro from '../../../assets/Our-Work-IMG/chillpro.jpg'
import fasten from '../../../assets/Our-Work-IMG/fasten.jpg'
import { Link } from 'react-router-dom'

function Home3() {
    return(
        <div className="Home3">
                <p>Наши работы :</p>



            <div className="Home3-Flex-the-cards">
                <a style={{textDecoration: "none"}} href="https://kia.uz/"><div className="Home3-cards">
                    <div className="Home3-img">
                        <img width={400} src={kia} alt="" />
                        <p>kia.uz</p>
                    </div>
                </div></a>
                <a style={{textDecoration: "none"}} href="https://www.chillpro.uz/"><div className="Home3-cards">
                    <div className="Home3-img">
                        <img width={400} src={chillpro} alt="" />
                        <p>chillpro.uz</p>
                    </div>
                </div></a>
                <a style={{textDecoration: "none"}} href="https://fasten.com/ru_uz"><div className="Home3-cards">
                    <div className="Home3-img">
                        <img width={400} src={fasten} alt="" /> 
                        <p>fasten.com</p>
                    </div>
                </div></a>
            </div>   
            <div className="Link-Home3">
                <Link to="/works" style={{ textDecoration: 'none' }}>
                    <button
                    style={{
                        color: 'white',
                        // backgroundColor: '#256AFF',
                        background: "linear-gradient(135deg, #256aff, #06b6d4)",
                        boxShadow: '0px 0px 30px rgba(0, 191, 255, 0.2)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '20px',
                        padding: '10px 20px',
                        border: 'none',
                        marginTop: "40px",
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease', // Smooth transition for hover effect
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1a5bff'; // Change background color on hover
                        e.target.style.transform = 'scale(1.1)'; // Slightly enlarge button on hover
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#256AFF'; // Reset background color
                        e.target.style.transform = 'scale(1)'; // Reset size after hover
                    }}
                    >
                    СМОТРЕТЬ БОЛЬШЕ РАБОТ
                    </button>
                </Link>
            </div>


        </div>
    )
}

export default Home3;