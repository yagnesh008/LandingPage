import { Phone, Settings, Globe, ShoppingCart } from "lucide-react";
import styles from "./Component.module.css";
function Compo(){
    return(
        <>
        <div className={styles.compoContainer}>
            <h5>What We Build</h5>
            <h1>Digital Solutions Designed Around Your Business</h1>
            <p>From first idea to launch, we combine design, development and technology to create practical digital products.</p>
            <div className={styles.compoWrapper}>
                <div>
                    <Globe className={styles.webcamIcon} />
                    <h1>Web Development</h1>
                    <p>Responsive business websites, portals and custom web applications.</p>
                </div>
                <div>
                    <Phone className={styles.phoneIcon} />
                    <h1>Mobile Apps</h1>
                    <p>Android and iOS applications built around your users and business model.</p>
                </div>
                <div>
                    <ShoppingCart className={styles.cartIcon} />
                    <h1>Ecommerce</h1>
                    <p>Online stores and ecommerce platforms designed for conversions and scale.</p>
                </div>
                <div>
                    <Settings className={styles.settingsIcon} />
                    <h1>Custom Software</h1>
                    <p>Business software, integrations, dashboards and workflow automation.</p>
                </div>
            </div>
        </div>
        <div className={styles.section2Bg}>
            <div className={styles.section2Container}>
                <h5>Why Teens Software Solutions</h5>
                <h1>A Technology Partner, Not Just a Vendor</h1>
                <div className={styles.numberWrapper}>
                    <div className={styles.numberItem}>
                        <h1>01</h1>
                        <p>Business-first approach</p>
                    </div>
                    <div className={styles.numberItem}>
                        <h1>02</h1>
                        <p>Custom development</p>
                    </div>
                    <div className={styles.numberItem}>
                        <h1>03</h1>
                        <p>Dedicated support</p>
                    </div>
                    <div className={styles.numberItem}>
                        <h1>04</h1>
                        <p>End-to-end delivery</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.section3Container}>
            <h5>Simple Process</h5>
            <h1>From Requirement to Launch</h1>
            <div className={styles.processWrapper}>
                <div className={styles.processItem}>
                    <div className={styles.stepBadge}>01</div>
                    <h3>Share Your Requirement</h3>
                    <p>Tell us your idea, business challenge, features and expected outcome.</p>
                </div>
                <div className={styles.processItem}>
                    <div className={styles.stepBadge}>02</div>
                    <h3>Plan & Estimate</h3>
                    <p>We discuss scope, technology, timeline and a suitable development approach.</p>
                </div>
                <div className={styles.processItem}>
                    <div className={styles.stepBadge}>03</div>
                    <h3>Build & Launch</h3>
                    <p>Our team develops, tests, deploys and supports your digital solution.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Compo