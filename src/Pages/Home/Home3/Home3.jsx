import React from "react";
import './Home3.css';

function Home3() {
    return (
        <div className="process-section">
            <div className="process-container">
                <h2 className="process-title">Как мы работаем</h2>
                <p className="process-description">
                    Наш подход к разработке обеспечивает прозрачность, эффективность и высокое качество конечного продукта.
                </p>
                <div className="process-steps">
                    <div className="process-step">
                        <h3 className="step-title">1. Анализ и планирование</h3>
                        <p className="step-description">
                            Мы изучаем ваш бизнес, цели и целевую аудиторию, чтобы разработать оптимальную стратегию и составить детальный план проекта.
                        </p>
                    </div>
                    <div className="process-step">
                        <h3 className="step-title">2. Дизайн и прототипирование</h3>
                        <p className="step-description">
                            Создаем прототипы и дизайн-макеты, которые отражают ваш бренд и обеспечивают отличный пользовательский опыт.
                        </p>
                    </div>
                    <div className="process-step">
                        <h3 className="step-title">3. Разработка</h3>
                        <p className="step-description">
                            Наши разработчики превращают дизайн в функциональный веб-сайт, используя современные технологии и лучшие практики.
                        </p>
                    </div>
                    <div className="process-step">
                        <h3 className="step-title">4. Наполнение контентом</h3>
                        <p className="step-description">
                            Интегрируем текстовый и визуальный контент, оптимизируя его для поисковых систем и конверсии.
                        </p>
                    </div>
                    <div className="process-step">
                        <h3 className="step-title">5. Тестирование и оптимизация</h3>
                        <p className="step-description">
                            Проводим тщательное тестирование на различных устройствах и браузерах, оптимизируем производительность.
                        </p>
                    </div>
                    <div className="process-step">
                        <h3 className="step-title">6. Запуск и поддержка</h3>
                        <p className="step-description">
                            Запускаем сайт, обучаем вашу команду и обеспечиваем техническую поддержку для бесперебойной работы.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home3;
