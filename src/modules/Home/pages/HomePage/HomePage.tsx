import React from 'react';
import styles from './HomePage.module.scss';

import { Generator } from '@/modules/PasswordGenerator/components/Generator/Generator';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Generator />
    </div>
  );
};
