import React from 'react';
import Header from './Header';
import Card from './Card';

import styles from '../Style/DiscriptPage.module.css'
import RollingBanner from './RollingBanner';

function DiscriptPage() {

  return (
    <div className={styles.Container}>
      <Header/>
      <div className={styles.Card}>
        <Card/>
      </div>
      
      <div className={styles.text}>
        <h1>'모든 건 기획이다!'</h1>
      </div>
      <div className={styles.Card}>
        <RollingBanner/>
      </div>
      

    </div>
  );
}

export default DiscriptPage;
