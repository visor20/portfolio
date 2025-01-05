import React, { useState } from 'react';
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

const email = 'richardnviso@gmail.com';
const mobile = '(225) 287 - 0149';

const Footer = ({ ref }) => {
    const [copyId, setCopyId] = useState(0);

    const handleInfoClick = async (event) => {
      const text = event.target.innerText;
      // console.log(text);

      try {
        await navigator.clipboard.writeText(text);
        if (text === email) {
          setCopyId(1);
        }
        else if (text === mobile) {
          setCopyId(2);
        }
        setTimeout(() => setCopyId(0), 2000);
      }
      catch(error) {
        console.error('Cannot Copy to Clipboard: ', error);
      }
    };

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
            <div className={styles.infoItem} onClick={handleInfoClick}>
              <div className={styles.infoIcon}>
                <MdEmail />
              </div>
              <p>{email}</p>
              {copyId === 1 
                ? 
                  <div className={styles.copyMessage}>
                    <p>Copied to Clipboard!</p>
                  </div>
                : 
                  null
              }
            </div>

            <div className={styles.infoItem} onClick={handleInfoClick}>
              <div className={styles.infoIcon}>
                <MdOutlinePhoneIphone />
              </div>
              <p>{mobile}</p>
              {copyId === 2 
                ? 
                  <div className={styles.copyMessage}>
                    <p>Copied to Clipboard!</p>
                  </div> 
                : 
                  null
              }
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
