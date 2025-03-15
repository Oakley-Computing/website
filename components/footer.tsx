// Copyright Rob Gage 2025

import styles from "@/components/footer.module.sass";
import global_styles from "@/app/global_styles.module.sass";

export default function Footer () {
    return (
        <>
            <div id={styles.container} className={global_styles.debug}>
                <ul className={global_styles.debug}>
                    <h4>Company</h4>
                    <a href={"/about"}>About</a>
                </ul>
                <ul className={global_styles.debug}>
                    <h4>Information</h4>
                    <a href={"/privacy-policy"}>Privacy Policy</a>
                    <a href={"/terms-and-conditions"}>Terms and Conditions</a>
                </ul>
                <ul className={global_styles.debug}>
                    <h4>Social</h4>
                    <a href={"/instagram"}>Instagram</a>
                    <a href={"/linkedin"}>LinkedIn</a>
                    <a href={"/thread"}>Threads</a>
                    <a href={"/twitter"}>X (Twitter)</a>
                </ul>
            </div>
            <div id={styles.container} className={global_styles.debug}>
                <span>Copyright © Rob Gage 2025</span>
            </div>
        </>
    );
}