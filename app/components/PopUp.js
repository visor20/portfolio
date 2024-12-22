import React from "react";
import styles from './PopUp.module.css';

const PopUp = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.exitButton} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );

};

export default PopUp;
