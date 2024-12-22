import { useState } from 'react';
import styles from './ProjectItem.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PopUp from './PopUp';

const ProjectItem = ({ title, text, imagePath, link }) => {
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
        children={<p>Hi</p>}
      />

      <div className={styles.titleBox}>
        <h1>{title}</h1>
      </div>

      <div className={styles.buttonContainer}>
        <Link href={link}>Click Me</Link>
      </div>

      <p>{text}</p>
      
      <div className={styles.projectImage}>
        <img src={imagePath}/>
      </div>
      
    </div>
  );
};

export default ProjectItem;
