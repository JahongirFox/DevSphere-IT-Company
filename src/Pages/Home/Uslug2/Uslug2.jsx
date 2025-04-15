import React from "react";
import './Uslug2.css'

function Uslug2() {
  return (
    <section className="service-section" id="services">
      <div className="service-container">
        <h2 className="service-title">Услуги</h2>
        <p className="service-subtitle">Наши услуги и цены</p>
        <p className="service-description">
          Мы предлагаем комплексные решения для вашего бизнеса по конкурентным ценам.
        </p>

        <div className="service-block">
          <h3 className="block-title">Веб-разработка</h3>
          <p className="block-desc">
            Профессиональная разработка веб-сайтов любой сложности с учетом ваших бизнес-потребностей и целевой аудитории.
          </p>

          <ul className="price-list">
            <li>
              <h4>Лендинг</h4>
              <span>от 2.500.000 сум</span>
              <p>Одностраничный сайт для продвижения продукта или услуги</p>
            </li>
            <li>
              <h4>Корпоративный сайт</h4>
              <span>от 5.500.000 сум</span>
              <p>Многостраничный сайт с информацией о компании и услугах</p>
            </li>
            <li>
              <h4>Интернет-магазин</h4>
              <span>от 9.000.000 сум</span>
              <p>Полнофункциональный магазин с каталогом товаров и корзиной</p>
            </li>
            <li>
              <h4>AmoCRM интеграция</h4>
              <span>от 12.000.000 сум</span>
              <p>Подключение сайта к CRM-системе для автоматизации продаж</p>
            </li>
            <li>
              <h4>Автоматизация бизнес-процессов</h4>
              <span>от 7.000.000 сум</span>
              <p>Разработка систем для оптимизации рабочих процессов</p>
            </li>
          </ul>

          <a href="#contact" className="service-button">Заказать веб-разработка</a>
        </div>
      </div>
    </section>
  );
}

export default Uslug2;
