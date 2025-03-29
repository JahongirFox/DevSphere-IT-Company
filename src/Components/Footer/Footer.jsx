import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";

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
            <div className="Footer-DevSphere">
                <h3>DevSphere</h3>
                <p>Send your Email to contact us.</p>
            </div>
            
            <div className="Form">
                <form ref={form} onSubmit={sendEmail}>
                    <input 
                        type="email" 
                        placeholder="Enter Your Email!" 
                        name="to_gmail" 
                        style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px", width: "250px" }}
                    />
                    <br />
                    <button type="submit" style={{ marginTop: "10px", padding: "10px 20px", background: "#2C2E3A", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Send
                    </button>
                </form>
                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
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
        </div>
    );
}

export default Footer;
