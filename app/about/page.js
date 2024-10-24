import React from "react";
import styles from './Page.module.css';

// root/about

const page = () => {
    return (
        <div className={styles.mainAboutContainer}>

          <div className={styles.aboutImageContainer}>
            <img
              className={styles.ppImage}
              src="/pp-1.jpg"
              alt="about picture 1" 
            />
            <img
              className={styles.bootsImage}
              src="/boots2.jpg"
              alt="about picture 2"
            />
          </div>
      
          <div className={styles.aboutTextContainer}>
            <p>
             lorem ipsum 
            </p>
          </div>

        </div>
    );
}

export default page;
