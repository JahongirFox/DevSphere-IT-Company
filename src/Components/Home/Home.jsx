import React from "react";
import './Home.css'
import programmer from './2344359.jpg'
import google from './google.png'
import reklama from './reklama.png'
import search from './web serach.png'
import chillpro from './chillpro.jpg'
import weestep from './weestep.jpg'
import surf from './surf.jpg'
import Jahongir from './jahongir.png'
import play from './play.jpg'

// import programmer from './DevSphere.png'

function Home() {
    return(
        <div className="Home">
            <div className="Home-flex-center">
                <div className="Home-flex">
                    <div className="Center-img">
                        <img width={"600px"} src={programmer} alt="" />
                    </div>
                    <div className="Home-h1-p">
                        <h1>Dev<span>Sphere</span> IT Company : <br /> Web Sayt yaratish markazi : <br /> Biz bilan biznesingizni rivojlantiring !</h1>
                        <p>Hozirda DevSphere IT Kompaniyasida<br /> professional web dasturchilar ishlab  kelmoqda <br /> va sizga istalgan texnik bilimli dasturchilar  sizning<br /> web saytingizni  yaratib berishi mumkin  </p>
                        <div className="btn-center"> 
                            <div className="btns">
                                <button>Bog'lanish</button>
                                <button>Narxlar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Xizmatlar">
                <p>Bizning<br /> <span>xizmatlarimiz</span> </p>
                <div className="Xizmat">
                     <h6>Biz mijozlarimizga sifatli va zamonaviy xizmatlarni taqdim etishga intilamiz. <br /> Quyida bizning asosiy xizmatlarimiz bilan tanishishingiz mumkin.</h6>
                </div>
                <div className="Center-Xizmatlar">
                    <div className="flex-the-xizmatlar-cards">
                        <div className="SEO">
                            <img width={"90px"} src={search} alt="" />
                            <h1><span>SEO</span> <br /> Optimallashtirish</h1>
                            <p>SEO optimallashtirish SEO - bu <br /> sizning sayt qidiruv tizimida yuqori <br /> o’rinlarda turishi, raqobatchilardan <br /> saytingiz yuqorida bo’lishi.</p>
                        </div>
                        <div className="SEO2">
                            <img width={"90px"} src={google} alt="" />
                            <h1><span>Sayt</span> <br /> Yaratish</h1>
                            <p>Sayt yaratish DevSphere<br /> internet  marketing agentligi<br /> sizning  biznesingiz uchun <br /> zamonaviy veb-saytlarni, <br /> internet-do'konlarni yaratadi.</p>
                        </div>
                        <div className="SEO2" >
                            <img width={"90px"} src={reklama} alt="" />
                            <h1><span>Googleda</span> <br />Reklama</h1>
                            <p>Sizga yangi mijozlar, savdo<br /> o'sishi, ko'proq  foydalanuvchi<br /> trafigini hohlaysizmi? Google-da<br /> hamyonbob narxlarda  professional<br /> internet reklama, kontekstli reklama <br /> buyurtma  qilishni taklif qilamiz.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bizning-ishlarimiz">
                    <p>Bizning <span>ishlarimiz</span></p>
                             <div className="block-centerr">
                                <div className="Block">
                                    <div className="Rasm">
                                     <a href="https://www.chillpro.uz/"><img width={700} src={chillpro} alt="" /></a>
                                    </div>
                                    <div className="Rasm">
                                        <a href="https://surfing-eight.vercel.app/"><img width={700} src={surf} alt="" /></a>
                                    </div>
                                    {/* <div className="Rasm">
                                        <a href="https://weestep.vercel.app/"><img width={700} src={weestep} alt="" /></a>
                                    </div>
                                    <div className="Rasm">
                                        <a href="https://skywings-app.vercel.app/"><img width={700} src={play} alt="" /></a> 
                                    </div> */}
                                </div>
                            </div>
                             <div className="block-centerr2">
                                <div className="Block">
                                    <div className="Rasm">
                                        <a href="https://weestep.vercel.app/"><img width={700} src={weestep} alt="" /></a>
                                    </div>
                                    <div className="Rasm">
                                        <a href="https://skywings-app.vercel.app/"><img width={700} src={play} alt="" /></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Bizning-Jamoa">
                                <p>Bizning <span>Jamoa</span></p>   

                            <div className="Jahongir-center">
                                <div className="center-jahongir">
                                    <div className="Jahongir">
                                        <img width={"700"} src={Jahongir} alt="" />
                                    </div>
                                </div>
                                    <div className="About-Jahognir">
                                        <p>Jahongir Raxmatjonov, <br /> Full-Stack Developer</p>
                                        <h4>Founder & CEO of DevSphere IT Company.</h4>
                                    </div>
                            </div>
                        </div>


                        </div>
    )
}

export default Home;