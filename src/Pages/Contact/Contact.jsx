import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Свяжитесь с нами</h2>
      <p className="contact-subtitle">
        Если у вас есть вопросы или предложения, заполните форму ниже — мы свяжемся с вами как можно скорее.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Введите имя" />
        <input type="email" placeholder="Введите email" />
        <textarea rows="5" placeholder="Напишите сообщение..."></textarea>
        <button type="submit">Отправить</button>
      </form>

    </div>
  );
};

export default Contact;  