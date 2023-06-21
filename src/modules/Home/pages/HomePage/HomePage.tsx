import React from 'react';
import styles from './HomePage.module.scss';

import { Generator } from '@/modules/PasswordGenerator/components/Generator/Generator';
import { ReactNotifications } from 'react-notifications-component';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <ReactNotifications />
      <Generator />
    </div>
  );
};
