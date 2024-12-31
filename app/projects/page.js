'use client';
import Background from '../components/Background';
import ProjectItem from '../components/ProjectItem';
import styles from './page.module.css';

/* Add new project items to this list */
const itemList = [
  {
    title: "ValueHub",
    summary: "A web app to find undervalued stocks.",
    body: "I built the frontend using React / Next. I decided to use Python for RPA on the backend so that I could easily leverage libraries like bs4 and playwright. The backend scrapes the web for insider trades and cross references with fundamental data to determine which stocks might be undervalued.",
    imagePath: "/VHlogo.png",
    link: "https://github.com/visor20/valuehub",
    youtube: false,
  },
  {
    title: "BootStrap",
    summary: "A wearable instrument controller.",
    body: "BootStrap is a physical product and the result of my senior capstone at Stanford. I designed all of the physical components in AutoCad, 3D printed them, designed a circuit board for various sensors, and used an Arduino as a microcontroller. The end result allowed the user to control musical sounds with various foot gestures.",
    imagePath: "/boots1.JPEG",
    link: "https://www.youtube.com/watch?v=OcGnW4v6gJM&t=2s",
    youtube: true,
  },
  {
    title: "Feedback",
    summary: "C++ audio plugin.",
    body: "was built with the C++ JUCE framework. It takes an audio stream as an input and uses an FFT to determine the pitch. Then, with this pitch, the user can simulate guitar feedback offset at variable intervals.",
    imagePath: "/finalGUI.jpg",
    link: "https://github.com/visor20/feedback",
    youtube: false,
  },
  {
    title: "Momentum Trading",
    summary: "Momentum-based trading strategy in Python.",
    body: "was based off a research paper (linked in the GitHub description). I thought it would be great way to brush up on my Python while learning the basics of algorithmic trading.",
    imagePath: "/plot_2024-09-06.png",
    link: "https://github.com/visor20/trading_mk1",
    youtube: false,
  },
  {
    title: "This Website",
    summary: "Meta...",
    body: "is this website! You can use the link below to view the source code and get a feel for my web development style. Typically, I prefer to use TypeScript, but I decided to stick to JavaScript since this is a relatively simple portfolio website.",
    imagePath: "/website.png",
    link: "https://github.com/visor20/visor20.github.io",
    youtube: false,
  },
];

const page = () => {
  return(
    <Background>
      <div className={styles.parentContainer}>
        <div className={styles.message}>
          <h3>Click a Project to learn more!</h3>
        </div>
        <div className={styles.gridContainer}>
          {itemList.map((value, index) => (
            <ProjectItem 
              title={value.title}
              summary={value.summary}
              body={value.body}
              imagePath={value.imagePath}
              link={value.link}
              isYouTube={value.youtube}
              key={index}
            />
          ))}
        </div>
      </div>
    </Background>
  );
};

export default page;
