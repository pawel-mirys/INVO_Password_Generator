import React, { useEffect, useState } from 'react';
import styles from './PasswordOptions.module.scss';
import { CheckBox } from '@/global-components/CheckBox/CheckBox';
import { useGeneratorContext } from '../../contexts/GeneratorContext';

export const PasswordOptions = () => {
  const generatorContext = useGeneratorContext();
  const [isUpperCaseCheckced, setIsUpperCaseCheckced] = useState(false);
  const [isLowerCaseCheckced, setIsLowerCaseCheckced] = useState(true);
  const [isNumbersChecked, setIsNumbersCheckced] = useState(false);
  const [isSymbolsChecked, setIsSymbolsCheckced] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'uppercase':
        setIsUpperCaseCheckced((prev) => !prev);
        break;
      case 'lowercase':
        setIsLowerCaseCheckced((prev) => !prev);
        break;
      case 'numbers':
        setIsNumbersCheckced((prev) => !prev);
        break;
      case 'symbols':
        setIsSymbolsCheckced((prev) => !prev);
    }
  };

  useEffect(() => {
    if (isUpperCaseCheckced === true) {
      generatorContext?.setPasswordChars((prev) => [
        ...prev,
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      ]);
    }
    if (isUpperCaseCheckced === false) {
      generatorContext?.setPasswordChars((prev) =>
        prev.filter((chars) => {
          return chars !== 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        })
      );
    }
  }, [isUpperCaseCheckced]);

  useEffect(() => {
    if (isLowerCaseCheckced === true) {
      generatorContext?.setPasswordChars((prev) => [
        ...prev,
        'abcdefghijklmnopqrstuvwxyz',
      ]);
    }
    if (isLowerCaseCheckced === false) {
      generatorContext?.setPasswordChars((prev) =>
        prev.filter((chars) => {
          return chars !== 'abcdefghijklmnopqrstuvwxyz';
        })
      );
    }
  }, [isLowerCaseCheckced]);

  useEffect(() => {
    if (isNumbersChecked === true) {
      generatorContext?.setPasswordChars((prev) => [...prev, '123456789']);
    }
    if (isNumbersChecked === false) {
      generatorContext?.setPasswordChars((prev) =>
        prev.filter((chars) => {
          return chars !== '123456789';
        })
      );
    }
  }, [isNumbersChecked]);

  useEffect(() => {
    if (isSymbolsChecked === true) {
      generatorContext?.setPasswordChars((prev) => [...prev, '!@#$%^&*()_+']);
    }
    if (isSymbolsChecked === false) {
      generatorContext?.setPasswordChars((prev) =>
        prev.filter((chars) => {
          return chars !== '!@#$%^&*()_+';
        })
      );
    }
  }, [isSymbolsChecked]);

  useEffect(() => {
    generatorContext?.generateRandomPassword();
  }, [
    isLowerCaseCheckced,
    isUpperCaseCheckced,
    isNumbersChecked,
    isSymbolsChecked,
  ]);

  return (
    <div className={styles.options}>
      <CheckBox
        name='uppercase'
        id='uppercase'
        labelText='Include Uppercase Letter'
        onChange={(e) => {
          handleCheck(e);
        }}
      />
      <CheckBox
        name='lowercase'
        id='lowercase'
        labelText='Include Lowercase Letter'
        defaultChecked
        checked
        onChange={(e) => {
          handleCheck(e);
        }}
        isDefaultChecked={isLowerCaseCheckced}
      />
      <CheckBox
        name='numbers'
        id='numbers'
        labelText='Include Numbers'
        onChange={(e) => {
          handleCheck(e);
        }}
      />
      <CheckBox
        name='symbols'
        id='symbols'
        labelText='Include Symbols'
        onChange={(e) => {
          handleCheck(e);
        }}
      />
    </div>
  );
};
