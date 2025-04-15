import React, { useState } from "react";
import './Home4.css';

function Home4() {
    // UseState for toggling the visibility of content
    const [isMissionVisible, setIsMissionVisible] = useState(false);
    const [isVisionVisible, setIsVisionVisible] = useState(false);
    const [areValuesVisible, setAreValuesVisible] = useState(false);

    // Toggle visibility function
    const toggleVisibility = (section) => {
        switch(section) {
            case "mission":
                setIsMissionVisible(!isMissionVisible);
                break;
            case "vision":
                setIsVisionVisible(!isVisionVisible);
                break;
            case "values":
                setAreValuesVisible(!areValuesVisible);
                break;
            default:
                break;
        }
    };

    return (
        <div className="home4-section">
            <div className="home4-container">
                <h2 className="home4-title">О нас</h2>
                <p className="home4-description">
                DevSphere — это команда увлеченных технических экспертов, стремящихся помочь бизнесу добиться успеха в цифровом мире. Благодаря многолетнему опыту и стремлению к совершенству, мы предлагаем инновационные решения, способствующие росту и эффективности. Наша цель — не только решать текущие задачи наших клиентов, но и создавать прочную основу для их будущего развития и успеха в быстро меняющемся цифровом мире.
                </p>
                
                {/* Mission */}
                <div 
                    className={`home4-card ${isMissionVisible ? 'show-description' : ''}`}
                    onClick={() => toggleVisibility("mission")}
                >
                    <h3 className="home4-card-title">
                        Наша миссия
                        <span className="home4-toggle-btn">
                            {isMissionVisible ? '-' : '+'}
                        </span>
                    </h3>
                    <p className="home4-card-description">
                        Наша миссия — помогать бизнесу раскрывать свой потенциал через инновационные технологические решения. Мы стремимся создавать цифровые продукты, которые не только решают текущие задачи наших клиентов, но и закладывают основу для их будущего роста и развития в быстро меняющемся цифровом мире.
                    </p>
                </div>

                {/* Vision */}
                <div 
                    className={`home4-card ${isVisionVisible ? 'show-description' : ''}`}
                    onClick={() => toggleVisibility("vision")}
                >
                    <h3 className="home4-card-title">
                        Наше видение
                        <span className="home4-toggle-btn">
                            {isVisionVisible ? '-' : '+'}
                        </span>
                    </h3>
                    <p className="home4-card-description">
                        Мы видим мир, где каждая компания имеет доступ к передовым цифровым технологиям, которые помогут им развиваться, расти и добиваться устойчивого успеха.
                    </p>
                </div>

                {/* Values */}
                <div 
                    className={`home4-card ${areValuesVisible ? 'show-description' : ''}`}
                    onClick={() => toggleVisibility("values")}
                >
                    <h3 className="home4-card-title">
                        Наши ценности
                        <span className="home4-toggle-btn">
                            {areValuesVisible ? '-' : '+'}
                        </span>
                    </h3>
                    <ul className="home4-values-list">
                        <li>Инновации</li>
                        <li>Честность и прозрачность</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home4;
