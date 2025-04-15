import React from "react";
import './Review.css';

function Review() {
    const reviews = [
        {
            name: "Jamshid Abdurahmonov", // Uzbek name
            profession: "CEO, Tech Solutions",
            rating: 5,
            review: "DevSphere bilan ishlashimiz juda muvaffaqiyatli bo'ldi. Bizning veb-saytimizni yaratishda professional yondoshuvni ko'rdik. Ularning jamoasi har bir detala e'tibor berib, vaqtida yuqori sifatli ishni amalga oshirdi. Yangi saytimiz kompaniyamizga ko'plab mijozlar olib keldi.",
        },
        {
            name: "Bekzod Mirzaev", // Uzbek name
            profession: "Designer",
            rating: 5,
            review: "DevSphere jamoasi bilan hamkorlik juda samarali bo'ldi. Ular dizaynni to'liq yangilab, foydalanuvchilar uchun qulay va estetik jihatdan mukammal qilishdi. Bizning loyihamizda barcha texnologik yangiliklarni o'z vaqtida joriy qilishdi. Buning natijasida, foydalanuvchilarni qoniqtirishda sezilarli yuksalish kuzatildi.",
        },
        {
            name: "Ayan Zhanatov", // Kazakh name
            profession: "Product Manager",
            rating: 5,
            review: "DevSphere командасымен жұмыс істеген өте жақсы тәжірибе болды. Олар біздің жобаға жаңа идеялар мен инновациялық шешімдер енгізді. Веб-сайтты құру кезінде әрбір бөлшекке мән беріп, қажетті нәтижеге қол жеткізді. Біз өте қуаныштымыз және болашақта оларға қайта ораламыз.",
        },
        {
            name: "Shyngys Mukhambetov", // Kazakh name
            profession: "E-Commerce Manager",
            rating: 5,
            review: "DevSphere бізге веб-сайтты жаңартуда тамаша жұмыс істеді. Олар біздің барлық қажеттіліктерімізді түсініп, өнімділікті жоғарылататын жаңа мүмкіндіктерді қосты. Біз олармен жұмыс істегенімізге өте қуаныштымыз, нәтижелер жоғары деңгейде болды.",
        },
        {
            name: "Dmitriy Tursunov", // Russian name
            profession: "Founder, Start-Up Co.",
            rating: 5,
            review: "Сотрудничество с командой DevSphere было настоящим удовольствием. Мы разработали веб-сайт для нашего стартапа, и результат превзошел все ожидания. Уровень сервиса, внимание к деталям и профессионализм команды — на высшем уровне. Мы обязательно будем обращаться к ним снова.",
        },
        {
            name: "Altynay Kenzhebekova", // Russian name
            profession: "Marketing Director",
            rating: 5,
            review: "Команда DevSphere сделала нашу компанию заметной в интернете. Мы работали с ними над редизайном сайта и адаптацией под мобильные устройства. Ребята показали высокий профессионализм, внедрили инновации и улучшили функциональность сайта, что привлекло больше клиентов.",
        }
    ];

    return (
        <div className="review-section">
            <h2 className="review-title">Отзывы наших клиентов</h2>
            <div className="review-container">
                {reviews.map((review, index) => (
                    <div className="review-card" key={index}>
                        <div className="review-header">
                            <h3 className="review-name">{review.name}</h3>
                            <p className="review-profession">{review.profession}</p>
                        </div>
                        <div className="review-stars">
                            {Array.from({ length: review.rating }, (_, i) => (
                                <span key={i} className="star">★</span>
                            ))}
                        </div>
                        <p className="review-text">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Review;
