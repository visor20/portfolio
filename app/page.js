import styles from './page.module.css';
import MyLogo from './components/MyLogo';

// home page route "/home"
export default function Home() {
  return (
    <div className={styles.main}>
      <MyLogo />
    </div>
  );
};
