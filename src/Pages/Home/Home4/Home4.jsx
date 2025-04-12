import React from "react";
import './Home4.css';

function Home4() {
    const steps = [
        { number: "01", title: "Запрос", description: "Отправьте ваш запрос" },
        { number: "02", title: "Анализ", description: "Мы изучим ваши требования" },
        { number: "03", title: "Дизайн", description: "Создаём макет сайта" },
        { number: "04", title: "Разработка", description: "Превращаем дизайн в код" },
        { number: "05", title: "Запуск", description: "Ваш сайт выходит в онлайн" },
    ];

    return (
        <div className="Home4">
            <p>Ваш сайт всего в<br />5 шагах от запуска!</p>
            <div className="Flex-Home4-bigs">
                {steps.map((step, index) => (
                    <div className="Home4-big" key={index}>
                        <div className="Home4-cardss">
                            <h1>{step.number}</h1>
                            <p>{step.title}</p>
                            <h3>{step.description}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home4;
