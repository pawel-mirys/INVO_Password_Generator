import React, { useRef } from 'react';
import styles from './PasswordOptions.module.scss';
import { CheckBox } from '@/global-components/CheckBox/CheckBox';
import { useGeneratorContext } from '../../contexts/GeneratorContext';

export const PasswordOptions = () => {
  const generatorContext = useGeneratorContext();
  const optionsRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.options} ref={optionsRef}>
      <div className={styles.optionsWrapper1}>
        <CheckBox
          name='uppercase'
          id='uppercase'
          labelText='Include Uppercase Letter'
          onChange={(e) => {
            generatorContext?.handleOptionCheck(e);
          }}
          isDefaultChecked={generatorContext?.isUpperCaseCheckced}
        />
        <CheckBox
          name='lowercase'
          id='lowercase'
          labelText='Include Lowercase Letter'
          defaultChecked
          checked
          onChange={(e) => {
            generatorContext?.handleOptionCheck(e);
          }}
          isDefaultChecked={generatorContext?.isLowerCaseCheckced}
        />
      </div>
      <div className={styles.optionsWrapper2}>
        <CheckBox
          name='numbers'
          id='numbers'
          labelText='Include Numbers'
          onChange={(e) => {
            generatorContext?.handleOptionCheck(e);
          }}
          isDefaultChecked={generatorContext?.isNumbersChecked}
        />
        <CheckBox
          name='symbols'
          id='symbols'
          labelText='Include Symbols'
          onChange={(e) => {
            generatorContext?.handleOptionCheck(e);
          }}
          isDefaultChecked={generatorContext?.isSymbolsChecked}
        />
      </div>
    </div>
  );
};
