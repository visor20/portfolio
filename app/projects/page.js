'use client';

import React from 'react';
import { useState } from 'react';
import Background from '../components/Background';
import ProjectItem from '../components/ProjectItem';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import PopUp from '../components/PopUp';
import ProjectInfo from '../components/ProjectInfo';


/* Add new project items to this list */
const itemList = [
  {
    title: "BootStrap",
    summary: "A wearable instrument controller.",
    body: "BootStrap is the result of my senior capstone at Stanford. I designed the physical components in AutoCad, 3D printed them, designed a circuit board for various sensors, and used an Arduino as a microcontroller. The end result allowed the user to control musical filters and effects with foot gestures.",
    imagePath: "/boots1.JPEG",
    link: "https://www.youtube.com/watch?v=OcGnW4v6gJM&t=2s",
    youtube: true,
    skills: ['C', 'Soldering', '3D printing', 'Sensors', 'Product Design'],
  },
  {
    title: "Feedback",
    summary: "C++ audio plugin in JUCE.",
    body: "I built Feedback in the C++ JUCE framework. It takes an audio stream as an input and uses an FFT to determine the pitch. Then, with this pitch, the user can simulate guitar feedback and even offset this feedback at variable intervals.",
    imagePath: "/finalGUI.jpg",
    link: "https://github.com/visor20/feedback",
    youtube: false,
    skills: ['C++', 'JUCE', 'DSP (Digital Signal Processing)'],
  },
  {
    title: "ValueHub",
    summary: "A web app to find undervalued stocks.",
    body: "ValueHub is my most current project and is still a WIP. The goal is to provide a one-stop-shop for finding and analyzing undervalued stocks. The backend scrapes the web for insider trades and cross references with fundamental data to give the security a ranking.",
    imagePath: "/VHlogo.png",
    link: "https://github.com/visor20/valuehub",
    youtube: false,
    skills: ['React', 'Next', 'HTML', 'CSS', 'Web Design', 'RPA (Robotic Process Automation)', 'Python'],
  },
  {
    title: "Trading",
    summary: "Momentum-based trading strategy in Python.",
    body: "I based this project off of a research paper (linked in the GitHub description). I thought it would be great way to brush up on my Python while learning the basics of algorithmic trading.",
    imagePath: "/plot_2024-09-06.png",
    link: "https://github.com/visor20/trading_mk1",
    youtube: false,
    skills: ['Python', 'Algorithmic Trading'],
  },
  {
    title: "This Website",
    summary: "Meta...",
    body: "You can use the link below to view the source code and get a feel for my web development style. Typically, I prefer to use TypeScript, but I decided to stick to JavaScript since this is a relatively simple portfolio website.",
    imagePath: "/website.png",
    link: "https://github.com/visor20/visor20.github.io",
    youtube: false,
    skills: ['React', 'Next', 'HTML', 'CSS', 'Web Design', 'UI/UX'],
  },
];

const Page = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [popIndex, setPopIndex] = useState(0);

  const handleClick = (key) => {
    setPopIndex(key);
    setIsSelected(true);
  };

  const closePopUp = () => {
    setIsSelected(false);
  };

  return(
    <Background>
      <div className={styles.parentContainer}>
      {/* PopUp with more detailed project information */}
      <PopUp 
        isOpen={isSelected}
        onClose={closePopUp}
      >
        <ProjectInfo 
          title={itemList[popIndex].title}
          text={itemList[popIndex].body}
          link={itemList[popIndex].link}
          isYouTube={itemList[popIndex].youtube}
          skills={itemList[popIndex].skills}
        />
      </PopUp>

        <div className={styles.message}>
          <h3>Click a Project to learn more!</h3>
        </div>
        <div className={styles.gridContainer}>
          {itemList.map((value, index) => (
            <motion.div 
              className={styles.outerMotion}
              key={index}
              onClick={() => handleClick(index)}
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
            >  
              <ProjectItem 
                title={value.title}
                summary={value.summary}
                body={value.body}
                imagePath={value.imagePath}
                link={value.link}
                isYouTube={value.youtube}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Background>
  );
};

export default Page;
