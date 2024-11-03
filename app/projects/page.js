import ProjectItem from '../components/ProjectItem';
import styles from './page.module.css';
// root/projects


const page = () => {
  return(
    <div className={styles.gridContainer}>
      <ProjectItem title={"Wearable Instrument"} text={"blahj bajsdfnkjfdbn"} />
    </div>
  );
};

export default page;
