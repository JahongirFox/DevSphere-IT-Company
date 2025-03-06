import React from "react";
import './Home.css'
import design from './dizayn.png'
import phone from './telefon.png'
import fast from './tez.png'
import arzon from './arzon.png'
import ok from './ok.png'
// import programmer from './DevSphere.png'

function Home() {
    return(
        <div className="Home">
                <div className="Home-p-text">
                    <p>Dev<span>Sphere</span> IT Company :<br /> Web Sayt yaratish xizmati :<br /> O'z Biznesingizni rivojlantiring !</p>
                    <h4>Hozirda DevSphere IT Kompaniyasida 50 dan ortiq<br /> professional web dasturchilar ishlab  kelmoqda va sizga<br /> istalgan texnik bilimli dasturchilar  sizning web saytingizni<br />  yaratib berishi mumkin  </h4>
                        <div className="Center">
                            <div className="btn">
                                <button className="btn1">Biz bilan bog'laning</button>
                                <button className="btn2">Narxlar</button>
                            </div>
                        </div>
                </div>
                <div className="Takliflar">
                    <p>Taklifimiz qanday?</p>

                    <div className="cards">
                        <div className="card1">
                            <img width={"60"} src={design} alt="" />
                            <p>Individual dizayn</p>
                            <h5>Sayt sizning firmangizga <br /> oid dizaynda bo'ladi</h5>
                        </div>
                        <div className="card1">
                            <img width={"65"} src={phone} alt="" />
                            <p className="p1">Moslashuvchan</p>
                            <h5>Saytlar ko'rinishi  qurilmaning <br />ekran  razmeriga moslashadigan <br /> bo'ladi</h5>
                        </div>
                        <div className="card1">
                            <img width={"60"} src={fast} alt="" />
                            <p>Tezkorlik</p>
                            <h5>Sayt yaratish jarayoni 2 <br /> dan 7 kungacha bo'ladi.</h5>
                        </div>
                        <div className="card1">
                            <img width={"60"} src={arzon} alt="" />
                            <p className="p1">Arzon narxlar</p>
                            <h5>Sayt yaratish narxi <br /> 1.000.000 dan 6.000.000 <br /> so'm gacha bo'ladi</h5>
                        </div>
                        <div className="card1">
                            <img width={"60"} src={ok} alt="" />
                            <p className="p2">Barchasi bir joyda</p>
                            <h5>Sizga to'ldirilgan va <br /> mehmonlarni qabul qilish <br /> uchun tayyor bo'lgan sayt <br /> topshiriladi</h5>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Home;