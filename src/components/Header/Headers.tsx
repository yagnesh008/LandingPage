"use client";

type HeaderProps = {
    onConsultationClick: () => void;
};

import Image from "next/image";
import styles from "./Header.module.css";

function Headers({ onConsultationClick }: HeaderProps){
    return(
        <header className={styles.headContainer}>
            <Image
                className={styles.logo}
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={50}
            />
            <h1 className={styles.headTitle}>BUILD • LAUNCH • SCALE</h1>
            
                <button className={styles.headBtn} onClick={onConsultationClick}>
                    Get a Free Consultation
                </button>
            
        </header>
    )
}
export default Headers