"use client";
import { useRef } from "react";
import Header from '../components/Header/Headers';
import Footer from '../components/Footer/Footer';
import Compo1 from '../components/C1/Compo1';
import Consultation from '../components/Consultation/Consultation';
import '../app/golobal.css';
function Home() {
        const nameInputRef = useRef<HTMLInputElement>(null);

        const handleConsultationClick = () => {
            nameInputRef.current?.focus();
        };
    return( 
        <>
            <Header onConsultationClick={handleConsultationClick} />

            <section>
                <Consultation inputRef={nameInputRef}/>
            </section>

            <section>
                <Compo1 />
            </section>

            <Footer onConsultationClick={handleConsultationClick}/>
        </>
    )          
}
export default Home