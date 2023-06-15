import React from 'react';
import styles from './HomePage.module.scss';
import { Button } from '@/global-components/Button/Button';
import { CheckBox } from '@/global-components/CheckBox/CheckBox';
import { RangeSlider } from '@/global-components/RangeSlider/RangeSlider';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <RangeSlider minLength={4} maxLength={16} name='range' id='range1' />
    </div>
  );
};
