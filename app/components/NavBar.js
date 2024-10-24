import Link from "next/link";
import styles from './NavBar.module.css'

const NavBar = () => {
    return(
        <ul className={styles.mainUl}>
            <li className={styles.listElement}>
                <Link href="/">Home</Link>
            </li>
            <li className={styles.listElement}>
                <Link href="/projects">Projects</Link>
            </li>
            <li className={styles.listElement}>
                <Link href="/about">About</Link>
            </li>
            <li className={styles.listElement}>
                <a href="/Richard Viso - Resume.pdf" target ="_blank">
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default NavBar
