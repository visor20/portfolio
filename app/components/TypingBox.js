'use client';

import { useState, useEffect } from 'react';
import styles from './TypingBox.module.css';

const TypingBox = ({ text, delay, alignmentFlag }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prevDisplayText => prevDisplayText + text[index]);
          setIndex(prevIndex => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }

  }, [index, text, delay]);

  return(
    <div className={alignmentFlag ? styles.typingContainerLeft : styles.typingContainerRight}>
      <h1>{displayText}</h1> 
    </div>
  );
};

export default TypingBox;
