'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import TypingBox from './TypingBox';
import styles from './MyLogo.module.css';
import typingStyles from './TypingBox.module.css';
import Background from './Background';

const SHADOW_VAL = 50;
const NUM_CLICK_ME = 10;

const MyLogo = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [shadow, setShadow] = useState({x: 0, y: 0});

  const handleMouseMove = (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - box.left - box.width / 2;
    const y = event.clientY - box.top - box.height / 2;

    // Adjust the intensity of the shadow
    const shadowX = (x / box.width) * SHADOW_VAL;
    const shadowY = (y / box.height) * SHADOW_VAL;

    setShadow({ x: shadowX, y: shadowY });
  };

  const handleClick = () => {
    setIsSelected(prevIsSelected => !prevIsSelected);
  };

  return (
    <Background handleMouseMove={handleMouseMove}>
      <motion.div
        onClick={handleClick}
        className={styles.logoContainer}
        style={{boxShadow: `${shadow.x}px ${shadow.y}px rgba(0, 0, 0, 0.2)`}}
        whileHover={{scale: 1.05}}
        transition={{duration: 0.3}}
      >

      <div className={styles.clickMe}>
        {Array.from({ length: NUM_CLICK_ME }, (_, i) => (
          <p key={i}>click me</p>
        ))}
      </div>

      {isSelected
        ?
        <div className={typingStyles.parentContainer}>
          <TypingBox text={'Richard'} delay={125} alignmentFlag={true} /> 
          <TypingBox text={'Viso'} delay={275} alignmentFlag={false} /> 
        </div>
        :
        <img 
          src="/vLogo1.svg"
          className={styles.logo}
          alt="Viso logo"
        />
      }


      <div className={styles.clickMe}>
        {Array.from({ length: NUM_CLICK_ME }, (_, i) => (
          <p key={i}>click me</p>
        ))}
      </div>

      </motion.div>
    </Background>
  );
};

export default MyLogo;
