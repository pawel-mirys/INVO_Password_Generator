import React from 'react';
import styles from './HomePage.module.scss';
import { Button } from '@/global-components/Button/Button';
import { CheckBox } from '@/global-components/CheckBox/CheckBox';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <CheckBox name='test' id='test' labelText='Include Numbers' />
    </div>
  );
};
