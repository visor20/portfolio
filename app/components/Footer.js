import styles from './Footer.module.css';

const Footer = ({ ref }) => {
    return(
      <div ref={ref} className={styles.mainContainer}>
        <div className={styles.contactContainer}>
          <h3>Contact Me</h3>
        </div>
      
        <ul className={styles.footerNav}>
          <li><a href="https://www.linkedin.com/in/richard-viso-184401248" target="_blank">My LinkedIn</a></li>
          <li>richardnviso@gmail.com</li>
          <li>225-287-0149</li>
        </ul>

        <div className={styles.copyright}>
          <p>© 2024 Richard Viso. All Rights Reserved.</p>
        </div>
      </div>
    );
}

export default Footer;
