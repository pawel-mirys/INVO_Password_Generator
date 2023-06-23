import React from 'react';
import styles from './PasswordStrenghtMeter.module.scss';
import { StrenghtBar } from '../StrenghtBar/StrenghtBar';

export const PasswordStrenghtMeter = () => {
  return (
    <div className={styles.strenghtMeterContainer}>
      <div className={styles.strenghtMeterHeader}>
        <h2>Strenght</h2>
        <p>Low password strenght</p>
      </div>
      <div className={styles.strenghtMeter}>
        <StrenghtBar variant='poor' />
        <StrenghtBar variant='poor' />
        <StrenghtBar variant='poor' />
        <StrenghtBar variant='poor' />
      </div>
    </div>
  );
};
