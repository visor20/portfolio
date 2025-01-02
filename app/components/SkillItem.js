import React from "react";
import styles from './SkillItem.module.css';

const SkillItem = ({ name }) => {
    return(
        <div className={styles.skillContainer}>
            <p>{name}</p>
        </div>
    );
};

export default SkillItem;