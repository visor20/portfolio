import Link from "next/link";
import styles from './NavBar.module.css'
import { FaHome } from "react-icons/fa";
import { FaFaceSmileBeam, FaPaperPlane, FaFilePdf, FaFilePen } from "react-icons/fa6";


const iconDictionary = {
    Home: <FaHome />,
    Projects: <FaFilePen />,
    About: <FaFaceSmileBeam />,
};


const NavBar = ({ items, scrollFunction }) => {
    return(
        <ul className={styles.mainUl}>

            {/* general navigation items */}
            {items.map((value, index) => (
               <li className={styles.listElement} key={index}>
                    <Link href={value.path}>
                        {iconDictionary[value.title]}
                        <p>{value.title}</p>
                    </Link>
               </li> 
            ))}

            {/* navigation items with unique behavior */}
            <li className={styles.listElement} onClick={scrollFunction}>
                <div className={styles.contact}>
                    <FaPaperPlane />
                    <p>Contact Me</p>
                </div>
            </li>
            <li className={styles.listElement}>
                <Link href="/Richard Viso - Resume.pdf" target ="_blank">
                    <FaFilePdf />
                    <p>Resume</p>
                </Link>
            </li>
        </ul>
    );
}

export default NavBar
