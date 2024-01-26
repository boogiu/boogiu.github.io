import React, { useEffect } from 'react';
import styles from '../Style/RollingBanner.module.css';

const images = [
  'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200',
  'https://images.unsplash.com/photo-1501493870936-9c2e41625521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200',
  'https://images.unsplash.com/photo-1611832197549-ff910be125dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200',
];

const RollingBanner = () => {
  useEffect(() => {
    const originalRoller = document.getElementById('roller1');
    const cloneRoller = document.getElementById('roller2');

    const rollerWidth = originalRoller.offsetWidth;
    const betweenDistance = 1;
    const gapBetweenImages = 10;

    const startRoller = () => {
      setInterval(() => {
        let originalLeft = parseInt(originalRoller.style.left);
        let cloneLeft = parseInt(cloneRoller.style.left);

        originalRoller.style.left = (originalLeft - betweenDistance) + 'px';
        cloneRoller.style.left = (cloneLeft - betweenDistance) + 'px';

        if (originalLeft - betweenDistance <= -rollerWidth) {
          originalRoller.style.left = (rollerWidth - gapBetweenImages) + 'px';
        }

        if (cloneLeft - betweenDistance <= -rollerWidth) {
          cloneRoller.style.left = (rollerWidth - gapBetweenImages) + 'px';
        }
      }, 1000 / 100);
    };

    startRoller();
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.rollingList} ${styles.original}`} id="roller1">
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              <div className={styles.imageWrap}>
                <img src={image} alt={`Banner ${index + 1}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.rollingList} ${styles.clone}`} id="roller2">
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              <div className={styles.imageWrap}>
                <img src={image} alt={`Banner ${index + 1}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RollingBanner;
