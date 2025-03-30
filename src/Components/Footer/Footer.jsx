import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";
import Insta from "./insta.png";
import Telegram from "./telegram.png";
import Telephone from './telephone.png'

function Footer() {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const emailInput = form.current.to_gmail.value.trim(); // Emailni olish

        if (!emailInput) {
            setError("Please enter a valid email!"); // Xatolik xabari
            return;
        } 

        setError(""); // Xatolikni tozalash

        emailjs
            .sendForm("devsphereitcompany2025##", "devsphereitcompany2025@#", form.current, {
                publicKey: "1WtcEn_mX6FP7Bqj5",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 3000); // 3 sekunddan keyin alert yo‘qoladi
                    form.current.reset(); // Formani tozalash
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setError("Failed to send email. Please try again."); // Agar jo‘natishda muammo bo‘lsa
                }
            );
    };

    return (
        <div className="Footer">
            <div className="Display-flex-Footer">
                <div>
                    <div className="Footer-DevSphere">
                        <h3>DevSphere</h3>
                        <p>Send your Email to contact us.</p>
                    </div>
                    
                    <div className="Form">
                        <form className="Form" ref={form} onSubmit={sendEmail}>
                            <input 
                                type="email" 
                                placeholder="Enter Your Email !" 
                                name="to_gmail" 
                            />
                            <br />
                            <button type="submit" >
                                Send
                            </button>
                        </form>
                        {error && <p style={{ color: "red", marginLeft: "40px", marginTop: "10px", fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`, fontSize:"20px" }}>{error}</p>}
                        {/* <p>© 2025 DevSphere IT Company. All rights reserved.</p> */}
                    </div>
                </div>

                {showAlert && (
                    <div style={{
                        position: "fixed",
                        top: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#2C2E3A",
                        color: "white",
                        border: "1px solid white",
                        padding: "20px 40px",
                        borderRadius: "5px",
                        zIndex: "9999"
                    }}>
                        Sent! Wait for expert's response
                    </div>
                )}
            <div className="Flex-company-blocks">
                <div className="Company">
                        <p>Company</p>
                        <ul><a href="">Home</a></ul>
                        <ul><a href="">About</a></ul> 
                        <ul><a href="">Works</a></ul>
                        <ul><a href="">Blogs</a></ul>
                </div>
                <div className="Imgs-blocks">
                    <p>Social</p>
                    <img style={{marginTop:"0px"}} width={35} src={Insta} alt="" /> <br />
                    <img width={35} src={Telegram} alt="" /> <br />
                    <img width={35} src={Telephone} alt="" /> <br />
                </div>
            </div>
            </div>
            <p className="p-foot" style={{fontSize:"15px", color: "white", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", textAlign:"center", marginTop:"20px"}}>© 2025 DevSphere IT Company. All rights reserved.</p>
        </div>
        
    );
}

export default Footer;
