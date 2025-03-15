// Copyright Rob Gage 2025

import global_styles from "@/app/global_styles.module.sass"
import styles from "./informational_page.module.sass"
import NavigationBar from "@/components/header";
import Footer from "@/components/footer";

export default function InformationalPage ({children}: {
    children: React.ReactNode;
}) {
    return <>
        <NavigationBar />
        <div id={styles.container} className={global_styles.debug}>
            {children}
        </div>
        <Footer />
    </>
}