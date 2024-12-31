import styles from './Footer.module.css';
import NavBar from './NavBar';
import { MdEmail, MdOutlinePhoneIphone } from 'react-icons/md';

const footerNavItems = [
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/richard-viso-184401248",
    blank: true,
  },
  {
    title: "GitHub",
    path: "https://github.com/visor20/",
    blank: true,
  },
];

const Footer = ({ ref }) => {
    return(
      <div ref={ref} className={styles.mainContainer}>
        <div className={styles.subContainer}>
          <div className={styles.titleContainer}>
            <h3>Contact Me</h3>
          </div>
        
          <NavBar 
            items={footerNavItems} 
            ref={null}
            scrollFunction={null}
            fixed={false}
          />

          <div className={styles.info}>
            <div className={styles.infoItem}>
              <MdEmail />
              <p>richardnviso@gmail.com</p>
            </div>

            <div className={styles.infoItem}>
              <MdOutlinePhoneIphone />
              <p>(225) 287 - 0149</p>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2024 Richard Viso. All Rights Reserved.</p>
        </div>
      </div>
    );
}

export default Footer;
