import styles from './Footer.module.css';

const Footer = () => {
    return(
       <div className={styles.mainContainer}>
          <div className={styles.contactContainer}>
            <div className={styles.title}>
              <h3>Contact Me</h3>
            </div>

            <div className={styles.footerNav}>
              <li><a href="https://www.linkedin.com/in/richard-viso-184401248" target="_blank">My LinkedIn</a></li>
              <li>richardnviso@gmail.com</li>
              <li>225-287-0149</li>
            </div>
        </div>
            <div className={styles.copyright}>
              <p>© 2024 Richard Viso. All Rights Reserved.</p>
            </div>

        </div>
    );
}

export default Footer;
