'use client';
import ProjectItem from '../components/ProjectItem';
import styles from './page.module.css';

/* Add new project items to this list */
const itemList = [
  {
    title: "ValueHub",
    text: "A web app to find undervalued stocks.",
    imagePath: "/VHlogo.png",
    link: "https://github.com/visor20/valuehub",
  },
  {
    title: "BootStrap",
    text: "A wearable instrument controller.",
    imagePath: "/boots1.JPEG",
    link: "https://github.com/visor20/valuehub",
  },
  {
    title: "Audio Plugins",
    text: "C++ audio plugins.",
    imagePath: "/finalGUI.jpg",
    link: "https://github.com/visor20/valuehub",
  },
  {
    title: "Trading",
    text: "Momentum-based trading strategy in Python.",
    imagePath: "/plot_2024-09-06.png",
    link: "https://github.com/visor20/valuehub",
  },
];

const page = () => {
  return(
    <div className={styles.parentContainer}>
      <div className={styles.message}>
        <h3>Click a Project to learn more!</h3>
      </div>
      <div className={styles.gridContainer}>
        {itemList.map((value, index) => (
          <ProjectItem 
            title={value.title}
            text={value.text}
            imagePath={value.imagePath}
            link={value.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
