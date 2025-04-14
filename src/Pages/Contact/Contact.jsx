import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: formData.name,
      to_gmail: formData.email,
      to_phone: formData.phone,
      to_message: formData.message,
    };

    emailjs.send(
      'devsphereitcompany2025',      // Your service ID
      'devsphereitcompany202525',    // Your template ID
      templateParams,
      'TMWTv1iiW34JHOUj9'            // Your user ID
    )
    
      .then(() => {
        setSuccessMsg('✅ Сообщение успешно отправлено!');
        setErrorMsg('');
        setFormData({ name: '', email: '', phone: '', message: '' });

        setTimeout(() => {
          setSuccessMsg('');
          navigate('/');
        }, 3000);
      })
      .catch((error) => {
        setErrorMsg('❌ Ошибка при отправке сообщения!');
        setSuccessMsg('');
        console.error('Email error:', error);
      });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Свяжитесь с нами</h2>
      <p className="contact-subtitle">
        Если у вас есть вопросы или предложения, заполните форму ниже.
      </p>

      {successMsg && <div className="custom-alert success">{successMsg}</div>}
      {errorMsg && <div className="custom-alert error">{errorMsg}</div>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Введите имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Введите email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Введите номер телефона"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Напишите сообщение..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Contact;
