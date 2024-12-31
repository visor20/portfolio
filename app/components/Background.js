import React from "react";
import styles from './Background.module.css';
import { motion } from 'framer-motion';

const Background = ({ children, handleMouseMove}) => {
    return(
        <motion.div
            className={styles.background}
            onMouseMove={handleMouseMove ? handleMouseMove : null}
            style={{
                background: 'linear-gradient(to bottom right, #748b8c, #ffffff)',
                backgroundSize: '300% 200%',
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']}}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
        >
            {/* children to be wrapped */}
            {children}

        </motion.div>
    );
};

export default Background;