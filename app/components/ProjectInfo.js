import React from "react";
import styles from './ProjectInfo.module.css';
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const ProjectInfo = ({title, text, link, isYouTube}) => {
    return(
        <div className={styles.mainContainer}>
            <div className={styles.textInfo}>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
            </div>
            <Link href={link} target="_blank">
                <div>
                    {isYouTube
                        ?
                        <div className={styles.myButton}>   
                            <p>Video</p>
                            <FaYoutube />
                        </div>
                        :
                        <div className={styles.myButton}>
                            <p>Source</p>
                            <FaGithub />
                        </div>
                    }
                </div>
            </Link>
        </div>
    );
};

export default ProjectInfo;