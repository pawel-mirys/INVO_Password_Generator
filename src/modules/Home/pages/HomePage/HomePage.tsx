import React from 'react';
import styles from './HomePage.module.scss';

import { StrenghtBar } from '@/modules/PasswordGenerator/components/StrenghtBar/StrenghtBar';



export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <StrenghtBar variant='strong'/>
    </div>
  );
};
