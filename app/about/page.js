import React from 'react';
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
            <div className={styles.aboutText}>
              <p>
                I am a recent graduate of Stanford University who specializes in full stack software development.
                I graduated on June 16th, 2024, with a cumulative GPA of 3.81 in <a href="https://symsys.stanford.edu/"
                target="_blank">Symbolic Systems.</a>
              </p>
            </div>

            <div className={styles.aboutText}>
              <p>
                Stanford's Symbolic Systems has given me a nuanced, interdisiplinary framework for 
                software development. 
                I took classes such as Data Structures and Algorithms, Computer Systems, 
                and Probability and Statistics for Computer Scientists while also studying Linguistics, Philosophy, 
                and Human-Computer Interaction.
              </p>
            </div>

            <div className={styles.aboutText}>
              <p>
                Outside of Stanford, I worked as a Software Engineering Intern at Dolby Laboratories on
                their new 
                <a href="https://www.dolby.com/technologies/dolby-atmos/dolby-atmos-flexconnect/" target="_blank">
                  FlexConnect API.
                </a>
                Initially, I worked with the research team to design new features for the FlexConnect backend. 
                I then implemented these features in our C engineering codebase while developing 
                a wide array of unit tests in our C++ framework. I also leveraged
                Git and Gitlab to help our 
                QA team with our project's version control and cloud-based testing. 
                After three months, my internship was extended, and I was given the opportunity 
                to create a full stack application for internal use. For this project, I used 
                Python, the React.js and Next.js frameworks, and database management to 
                implement this tool for my team members.
              </p>
            </div>

          </div>
        </div>
    );
}

export default page;
