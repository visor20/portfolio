import { useState } from 'react';
import Link from "next/link";
import styles from './NavBar.module.css'
import { FaHome } from "react-icons/fa";
import { FaFaceSmileBeam, FaPaperPlane, FaFilePdf, FaFilePen, FaGithub } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const iconDictionary = {
    'Home': <FaHome />,
    'Projects': <FaFilePen />,
    'About': <FaFaceSmileBeam />,
    'Resume': <FaFilePdf />,
    'LinkedIn': <FaLinkedin />,
    'GitHub': <FaGithub />,
};


const NavBar = ({ items, scrollFunction, fixed }) => {
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
            className={fixed ? styles.mainUl : styles.footerUl}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            {/* general navigation items */}
            {items.map((value, index) => (
               <li 
                    className={styles.listElement}
                    key={index} 
                    style={!fixed ? {width: '100%'} : null}
               >
                    <Link
                        href={value.path}
                        target={value.blank ? '_blank' : ''}
                        style={!fixed ? {justifyContent: 'left', padding: '5px'} : null}
                    >
                        {iconDictionary[value.title]}
                        <p>{value.title}</p>
                        <div className={curItem === value.title ? styles.arrowVisible : styles.arrow}>
                            <IoIosArrowForward />
                        </div>
                    </Link>
               </li> 
            ))}

            {/* navigation items with unique behavior */}
            {scrollFunction 
                ?
                    <li className={styles.listElement} onClick={scrollFunction}>
                        <div className={styles.contact}>
                            <FaPaperPlane />
                            <p>Contact Me</p>
                            <div className={curItem === "Contact Me" ? styles.arrowVisible : styles.arrow}>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </li>
                :
                    null
            }
        </ul>
    );
}

export default NavBar
