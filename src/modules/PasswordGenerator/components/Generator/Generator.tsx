import React from 'react';
import styles from './Generator.module.scss';
import { RangeSlider } from '../RangeSlider/RangeSlider';
import { CheckBox } from '@/global-components/CheckBox/CheckBox';
import { StrenghtBar } from '../StrenghtBar/StrenghtBar';
import { PasswordOutput } from '../PasswordOutput/PasswordOutput';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';

export const Generator = () => {
  return (
    <div className={styles.generatorContainer}>
      <h1 className={styles.generatorHeader}>Password Generator</h1>
      <div className={styles.rangeContainer}>
        <div className={styles.rangeContainerHeader}>
          <h2>Character Length</h2>
          <h1>6</h1>
        </div>
        <RangeSlider
          minLength={4}
          maxLength={16}
          name='strenght'
          id='strenght'
        />
      </div>
      <div className={styles.options}>
        <CheckBox
          name='uppercase'
          id='uppercase'
          labelText='Include Uppercase Letter'
        />
        <CheckBox
          name='lowercase'
          id='lowercase'
          labelText='Include Lowercase Letter'
        />
        <CheckBox name='numbers' id='numbers' labelText='Include Numers' />
        <CheckBox name='symbols' id='symbols' labelText='Include Symbols' />
      </div>
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
      <PasswordOutput />
      <Button className={styles.copyButton} variant='primary'>
        <Icon name='copy' size={20} /> Copy Password
      </Button>
    </div>
  );
};
