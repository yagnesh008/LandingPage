"use client";

type HeaderProps = {
    onConsultationClick: () => void;
};
import styles from "./Footer.module.css";
function Footer({ onConsultationClick }: HeaderProps){
    return(
        <>
        <section className={styles.footer}>
            <div className={styles.ctaSection}>
                <h5 className={styles.eyebrow}>Ready to Start?</h5>
                <h1 className={styles.ctaHeading}>Have a Project in Mind?</h1>
                <p className={styles.ctaText}>Let's discuss your requirement and identify the right technology solution.</p>
                <button className={styles.ctaButton} onClick={onConsultationClick}>
                    Get Free Consultation
                </button>
            </div>
        </section>
        <section className={styles.footerBottomBg}>
            <div className={styles.footerBottom}>
                <div className={styles.footerLeft}>
                    <h5>Teens Software Solutions LLP</h5>
                    <p>Unit No. 303 B, 3rd Floor, New Mark House, Plot No. 56, Patrika Nagar, Madhapur, Hyderabad – 500081</p>
                </div>
                <div className={styles.footerRight}>
                    <p>+91-9032938676</p>
                    <p>info@teensitsolutions.com</p>
                    <p className={styles.hours}>Mon–Sat: 9:00 AM–6:00 PM</p>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; 2026 Teens Software Solutions. All rights reserved.
            </div>
        </section>
        </>
    )
}
export default Footer;