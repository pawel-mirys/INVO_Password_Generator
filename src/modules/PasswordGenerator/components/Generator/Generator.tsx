import React from 'react';
import styles from './Generator.module.scss';
import { RangeSlider } from '../RangeSlider/RangeSlider';
import { PasswordOutput } from '../PasswordOutput/PasswordOutput';
import { PasswordOptions } from '../PasswordOptions/PasswordOptions';
import { PasswordStrenghtMeter } from '../PasswordStrenghtMeter/PasswordStrenghtMeter';
import { CopyButton } from '../CopyButton/CopyButton';

export const Generator = () => {
  return (
    <div className={styles.generatorContainer}>
      <h1 className={styles.generatorHeader}>Password Generator</h1>
      <RangeSlider />
      <PasswordOptions />
      <PasswordStrenghtMeter />
      <PasswordOutput />
      <CopyButton />
    </div>
  );
};
