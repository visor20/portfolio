import React from "react";
import { useState, useEffect } from "react";
import styles from './Slideshow.module.css'

const Slideshow = ({ slides, interval = 3000 }) => {
    const [curIndex, setCurIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurIndex((prevIndex) => {
                return (prevIndex + 1) % slides.length;
            });
          }, interval);
      
        return () => clearInterval(timer);
    }, [slides, interval]);

    return (
        <div className={styles.outer}>
            <div 
                className={styles.inner}
                style={{ transform: `translateX(-${curIndex * 33}%)` }}
            >
                {slides.map((slidePath, index) => (
                    <div 
                        className={styles.slideItem}
                        key={index}
                    >
                        <img
                            src={slidePath}
                            alt={`slide ${index + 1}`}
                            className={styles.slideImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;