import React from "react";
import './Project.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Project() {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = () => {
        // Navigate to the /contactus page when the button is clicked
        navigate('/contactus');
    };

    return (
        <div className="project">
            <div className="home5-content">
                <h2>Есть идея для проекта?</h2>
                <button onClick={handleClick}>Давайте обсудим</button> {/* Attach the handleClick function */}
            </div>
        </div>
    );
}

export default Project;
