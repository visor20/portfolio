import { useState } from 'react';
import Link from "next/link";
import styles from './NavBar.module.css'
import { FaHome } from "react-icons/fa";
import { FaFaceSmileBeam, FaPaperPlane, FaFilePdf, FaFilePen } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const iconDictionary = {
    Home: <FaHome />,
    Projects: <FaFilePen />,
    About: <FaFaceSmileBeam />,
};


const NavBar = ({ items, scrollFunction }) => {
    const [curItem, setCurItem] = useState('');

    const handleMouseMove = (event) => {
        const text = event.target.textContent;
        if (text !== '') {
            setCurItem(text);
        }
    };

    const handleMouseLeave = () => {
        setCurItem('');
    };

    return(
        <ul 
            className={styles.mainUl}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            {/* general navigation items */}
            {items.map((value, index) => (
               <li className={styles.listElement} key={index}>
                    <Link href={value.path}>
                        {iconDictionary[value.title]}
                        <p>{value.title}</p>
                        <div className={curItem === value.title ? styles.arrowVisible : styles.arrow}>
                            <IoIosArrowForward />
                        </div>
                    </Link>
               </li> 
            ))}

            {/* navigation items with unique behavior */}
            <li className={styles.listElement} onClick={scrollFunction}>
                <div className={styles.contact}>
                    <FaPaperPlane />
                    <p>Contact Me</p>
                    <div className={curItem === "Contact Me" ? styles.arrowVisible : styles.arrow}>
                        <IoIosArrowForward />
                    </div>
                </div>
            </li>
            <li className={styles.listElement}>
                <Link href="/Richard Viso - Resume.pdf" target ="_blank">
                    <FaFilePdf />
                    <p>Resume</p>
                    <div className={curItem === "Resume" ? styles.arrowVisible : styles.arrow}>
                        <IoIosArrowForward />
                    </div>
                </Link>
            </li>
        </ul>
    );
}

export default NavBar
