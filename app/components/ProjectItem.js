import { useState } from 'react';
import styles from './ProjectItem.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PopUp from './PopUp';
import ProjectInfo from './ProjectInfo';

const ProjectItem = ({ title, summary, body, imagePath, link, isYouTube}) => {
  const [isHover, setIsHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMoustLeave = () => {
    setIsHover(false);
  };

  const openPopUp = () => {
    setIsSelected(true);
  };

  const closePopUp = () => {
    setIsSelected(false);
    setIsHover(false);
  };

  return(
    <div 
      className={isHover ? styles.hover : styles.default}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMoustLeave}
      onClick={openPopUp}
    >
      {/* PopUp with more detailed project information */}
      <PopUp 
        isOpen={isSelected}
        onClose={closePopUp}
        children={
          <ProjectInfo 
            title={title}
            text={body}
            link={link}
            isYouTube={isYouTube}
          />}
      />

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
