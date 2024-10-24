'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TypingBox from './TypingBox';
import styles from './MyLogo.module.css';
import typingStyles from './TypingBox.module.css';

const MyLogo = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(prevIsSelected => !prevIsSelected);
    console.log(isSelected);
  };

  return (
    <div 
      onClick={handleClick}
    >
    {isSelected
      ?
        <motion.div
          className={styles.logoContainer}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.3}}
        >
          <div className={typingStyles.parentContainer}>
            <TypingBox text={'Richard'} delay={125} alignmentFlag={true} /> 
            <TypingBox text={'Viso'} delay={275} alignmentFlag={false} /> 
          </div>
        </motion.div>
      :
        <motion.div
          className={styles.logoContainer}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.3}}
        >
          <img 
            src="/vLogo1.svg"
            className={styles.logo}
            alt="Viso logo"
          />
        </motion.div>
    }
    </div>
  );
};

export default MyLogo;
