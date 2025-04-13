import React, { useState } from "react";
import './Home6.css';

function Home6() {
    const [open, setOpen] = useState(null);

    const toggleAnswer = (index) => {
        setOpen(open === index ? null : index); // Toggle answer visibility
    }

    return (
        <div className="Home6">
            <div className="faq-container">
                <h2 className="faq-heading">Часто задаваемые вопросы</h2>

                <div className="faq-item">
                    <button className={`faq-question ${open === 0 ? 'open' : ''}`} onClick={() => toggleAnswer(0)}>
                        Что такое Devsphere?
                    </button>
                    {open === 0 && (
                        <div className="faq-answer open">
                            <p>Devsphere — это IT-компания, предоставляющая современные технологические решения для бизнеса, с фокусом на разработку, безопасность и инновации.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <button className={`faq-question ${open === 1 ? 'open' : ''}`} onClick={() => toggleAnswer(1)}>
                        Как я могу связаться с Devsphere?
                    </button>
                    {open === 1 && (
                        <div className="faq-answer open">
                            <p>Вы можете связаться с нами через нашу страницу контактов или по электронной почте raxmatjonovjahongir5@gmail.com.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <button className={`faq-question ${open === 2 ? 'open' : ''}`} onClick={() => toggleAnswer(2)}>
                        Какие услуги вы предлагаете?
                    </button>
                    {open === 2 && (
                        <div className="faq-answer open">
                            <p>Мы предлагаем разработку веб-сайтов, IT-консалтинг и облачные решения.</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <button className={`faq-question ${open === 3 ? 'open' : ''}`} onClick={() => toggleAnswer(3)}>
                        Могу ли я получить бесплатную консультацию?
                    </button>
                    {open === 3 && (
                        <div className="faq-answer open">
                            <p>Да! Мы предлагаем бесплатную первичную консультацию для обсуждения ваших потребностей в бизнесе.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home6;
