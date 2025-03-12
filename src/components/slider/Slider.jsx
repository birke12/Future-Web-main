import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      /* title: 'Slide 1',
      description: 'Cyberpunk Futuristic Theme', */
      image: './assets/images/webVoice.jpg',
    },
    {
      /* title: 'Slide 2',
      description: 'Blade Runner Vibes', */
      image: './assets/images/websus2.jpg',
    },
    {
      /* title: 'Slide 3',
      description: 'Neon Nights in the City', */
      image: './assets/images/websus.jpg',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className={styles.slideImage} />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{slides[currentIndex].title}</h2>
          <p className={styles.description}>{slides[currentIndex].description}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.prevButton} onClick={handlePrev}>Prev</button>
        <button className={styles.nextButton} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
