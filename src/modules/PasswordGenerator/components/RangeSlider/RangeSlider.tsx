import React from 'react';
import styles from './RangeSlider.module.scss';

import { useGeneratorContext } from '../../contexts/GeneratorContext';
import { RangeSliderContainer } from './RangeSliderContainer';

export const RangeSlider = () => {
  const generatorContext = useGeneratorContext();

  return (
    <div className={styles.rangeContainer}>
      <div className={styles.rangeContainerHeader}>
        <h2>Character Length</h2>
        <h1>{generatorContext?.charAmount}</h1>
      </div>
      <RangeSliderContainer
        minLength={4}
        maxLength={16}
        step={1}
        defaultValue={40}
        name='strenght'
        id='strenght'
      />
    </div>
  );
};
