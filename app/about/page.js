'use client';

import React from 'react';
import styles from './Page.module.css';
import Background from '../components/Background';
import { GoPerson } from "react-icons/go";
import { IconContext } from 'react-icons';

// root/about

const page = () => {
    return (
      <Background>
        <div className={styles.mainAboutContainer}>
      
          <div className={styles.aboutTextContainer}>
            <div className={styles.aboutText}>
              <div className={styles.aboutIcon}>
                <IconContext.Provider value={{size: '50px'}}>
                  <GoPerson />
                </IconContext.Provider>
              </div>

              <div className={styles.aboutTitle}>
                <h2>About Me</h2>
              </div>

              <p>
                I am a graduate of Stanford University who specializes in full stack software development.
                I graduated in June of 2024, with a GPA of 3.81 in <a className={styles.textLink} href="https://symsys.stanford.edu/"
                target="_blank">Symbolic Systems. </a>I took classes such as Data Structures and Algorithms, Computer Systems, 
                and Probability and Statistics for Computer Scientists while also studying Linguistics, Philosophy, 
                and Human-Computer Interaction.

                Outside of Stanford, I worked as a Software Engineering Intern at Dolby Laboratories on
                their new 
                <a className={styles.textLink} href="https://www.dolby.com/technologies/dolby-atmos/dolby-atmos-flexconnect/" target="_blank"> FlexConnect API. </a>
                Initially, I worked with the research team to design and implement
                new features for the FlexConnect backend in C, C++, and Python. 
                After 3 months, my internship was extended and I was given the opportunity 
                to create a full stack application for internal use. For this project, I used 
                Python, React, and Next to implement a useful tool for my team members.
              </p>
            </div>
          </div>
          
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

        </div>
      </Background>
    );
}

export default page;
