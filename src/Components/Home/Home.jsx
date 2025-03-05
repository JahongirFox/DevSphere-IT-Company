import React from "react";
import './Home.css'

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
        </div>
    )
}

export default Home;