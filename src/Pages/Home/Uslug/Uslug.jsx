import React from "react";
import "./Uslug.css";
import { BadgeCheck, Globe, Smartphone, Users, ShieldCheck, RefreshCw } from "lucide-react";

function Uslug() {
  const features = [
    {
      icon: <BadgeCheck className="icon" />,
      title: "Индивидуальная разработка",
      desc: "Разработка решений, полностью адаптированных под потребности вашего бизнеса.",
    },
    {
      icon: <Globe className="icon" />,
      title: "Веб-приложения",
      desc: "Масштабируемые и адаптивные веб-приложения с использованием передовых технологий.",
    },
    {
      icon: <Smartphone className="icon" />,
      title: "Мобильные решения",
      desc: "Кроссплатформенные приложения, идеально работающие на Android и iOS.",
    },
    {
      icon: <Users className="icon" />,
      title: "Выделенная команда",
      desc: "Профессиональные разработчики, вовлечённые в ваш проект от начала до конца.",
    },
    {
      icon: <ShieldCheck className="icon" />,
      title: "Контроль качества",
      desc: "Многоуровневое тестирование для стабильной и безопасной работы решений.",
    },
    {
      icon: <RefreshCw className="icon" />,
      title: "Постоянная поддержка",
      desc: "Мы остаёмся с вами даже после запуска — обновления и обслуживание продуктов.",
    },
  ];

  return (
    <section className="uslug-section">
      <div className="uslug-container">
        <h2 className="uslug-title">
          Почему выбирают <span className="highlight">DevSphere</span> ?
        </h2>
        <p className="uslug-subtitle">
          Мы объединяем технический опыт с инновационным мышлением для выдающихся результатов.
        </p>
        <div className="uslug-grid">
          {features.map((feature, index) => (
            <div className="uslug-card" key={index}>
              <div className="uslug-icon">{feature.icon}</div>
              <h3 className="uslug-card-title">{feature.title}</h3>
              <p className="uslug-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Uslug;
