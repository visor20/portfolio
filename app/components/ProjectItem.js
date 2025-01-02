import { useState } from 'react';
import styles from './ProjectItem.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PopUp from './PopUp';
import ProjectInfo from './ProjectInfo';

const ProjectItem = ({ title, summary, body, imagePath, link, isYouTube}) => {

  return(
    <div 
      className={styles.default}
    >
      <div className={styles.titleBox}>
        <h1>{title}</h1>
      </div>

      <div className={styles.summary}>
        <p>{summary}</p>
      </div>

      <div className={styles.projectImage}>
        <img src={imagePath}/>
      </div>
      
    </div>
  );
};

export default ProjectItem;
