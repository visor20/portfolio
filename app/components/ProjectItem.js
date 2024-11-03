import { useState } from 'react';
import styles from './ProjectItem.module.css';

const ProjectItem = ({ title, text, link }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMoustLeave = () => {
    setIsHover(false);
  };

  return(
    <div 
      className={styles.projectItemContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMoustLeave}
    >
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default ProjectItem;
