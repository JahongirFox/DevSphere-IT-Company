import React from "react";
import './Home0.css';
import nn from '../../../assets/nn.png';

function Home0() {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <div className="badge">🚀 Devsphere – Инновационные решения</div>
                    <h1>
                        Инновационные решения <span>для ваших цифровых потребностей</span>
                    </h1>
                    <p>
                        Мы предлагаем быстрое и доступное создание веб-сайтов и Telegram-ботов в Ташкенте.
                        Лучшее качество и выгодные цены для вашего бизнеса.
                    </p>
                    <button className="btn">Начать сотрудничество →</button>
                </div>
                <div className="hero-image">
                    <img src={nn} alt="Devsphere preview" />
                </div>
            </div>
        </section>
    );
}

export default Home0;
