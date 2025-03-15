// Copyright Rob Gage 2025

import global_styles from "@/app/global_styles.module.sass"
import styles from "@/components/header.module.sass"

export default function NavigationBar () {
    return <>
        <div id={styles.container} className={global_styles.debug}>
            <div id={styles.logo} className={global_styles.debug}>
                <a href={"/"}><img src={"logo.svg"} alt={"logo"}/></a>
            </div>
            <nav id={styles.navigation} className={global_styles.debug}>
                <a href={"/product"}>Product</a>
                <a href={"/company"}>Company</a>
                <a href={"/news"}>News</a>
            </nav>
        </div>
    </>
}
