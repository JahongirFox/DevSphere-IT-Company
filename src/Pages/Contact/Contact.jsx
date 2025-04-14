import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Свяжитесь с нами</h2>


      <form className="contact-form">
        <input type="text" placeholder="Введите имя" required />
        <input type="email" placeholder="Введите email" required />
        <input type="tel" placeholder="Введите номер телефона" required />
        <textarea rows="5" placeholder="Напишите сообщение..." required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Contact;
