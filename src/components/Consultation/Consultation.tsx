"use client";

import { useState ,RefObject} from "react";
import { Check } from "lucide-react";
import styles from "./Consultation.module.css";

type ConsultationProps = {
    inputRef: RefObject<HTMLInputElement | null>;
};

function Consultation({ inputRef }: ConsultationProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phonenumber, setPhone] = useState("");
    const [needs, setNeeds] = useState("");
    async function Submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = {
            name,
            email,
            message,
            phonenumber,
            needs
        };
        try {
            const response = await fetch('/api/consultation', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (response.ok) {
                console.log("Form submitted successfully");
                
                setName("");
                setEmail("");
                setMessage("");
                setPhone("");
                setNeeds("");
                window.location.href = "https://www.teensitsolutions.com/";
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
       
    }
    return(
        <div className={styles.consultationContainer}>
            <div className={styles.consultationWrapper}>
                <h3>
                    <span className={styles.liveWrapper}>
                    <span className={styles.dot}></span></span>
                    &nbsp; WEB • MOBILE • SOFTWARE • DIGITAL MARKETING </h3>
                <h1>Turn Your Business Idea Into a Digital Product That Grows.</h1>
                <p>Need a professional website, mobile app, ecommerce platform or custom software? Tell us what you need and our team will help you plan, build and launch it.</p>
                <ul>
                    <li> <Check className={styles.checkIcon} />Custom-built solutions</li>
                    <li><Check className={styles.checkIcon} />Business-focused development</li>
                    <li><Check className={styles.checkIcon} />Web & mobile expertise</li>
                    <li><Check className={styles.checkIcon} />Post-launch support</li>
                </ul>
            </div>
            <div className={styles.consultationForm}>
                <h2>Get a Free Consultation</h2>
                <p>Share your requirement. Our team will contact you to understand your project.</p>
                <form onSubmit={Submit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" ref={inputRef} id="name" value={name} required placeholder="Full Name *" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} required placeholder="Email *" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phonenumber">Phone Number:</label>
                        <input type="tel" id="phonenumber" value={phonenumber} required placeholder="Phone Number/ WhatsApp Number*" minLength={10} onChange={(e) => {
                            const digitsOnly = e.target.value.replace(/\D/g, "");
                            setPhone(digitsOnly);
                        }} />
                    </div>
                    <div>
                        <label htmlFor="needs">What do you need?</label>
                        <select id="needs" value={needs} required onChange={(e) => setNeeds(e.target.value)}>
                            <option value="">What do you need?</option>
                            <option value="website">Website</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="ecommerce">Ecommerce Platform</option>
                            <option value="custom-software">Custom Software</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" value={message} required placeholder="Brief description of your project *" onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                    <p>By submitting, you agree to be contacted regarding your enquiry.</p>
                </form>
            </div>
        </div>
    )

}
export default Consultation;