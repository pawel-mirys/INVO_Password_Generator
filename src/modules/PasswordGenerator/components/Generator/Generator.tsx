import React, { useEffect, useRef, useState } from 'react';
import styles from './Generator.module.scss';
import { RangeSlider } from '../RangeSlider/RangeSlider';
import { CheckBox } from '@/global-components/CheckBox/CheckBox';
import { StrenghtBar } from '../StrenghtBar/StrenghtBar';
import { PasswordOutput } from '../PasswordOutput/PasswordOutput';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';

export const Generator = () => {
  const [charAmount, setCharAmount] = useState(6);
  const [randomPassword, setRandomPassword] = useState('');
  const [passwordChars, setPasswordChars] = useState<string[]>([
    'abcdefghijklmnopqrstuvwxyz',
  ]);
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
      setPasswordChars((prev) => [...prev, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ']);
    }
    if (isUpperCaseCheckced === false) {
      setPasswordChars((prev) =>
        prev.filter((chars) => {
          return chars !== 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        })
      );
    }
  }, [isUpperCaseCheckced]);

  useEffect(() => {
    if (isLowerCaseCheckced === true) {
      setPasswordChars((prev) => [...prev, 'abcdefghijklmnopqrstuvwxyz']);
    }
    if (isLowerCaseCheckced === false) {
      setPasswordChars((prev) =>
        prev.filter((chars) => {
          return chars !== 'abcdefghijklmnopqrstuvwxyz';
        })
      );
    }
  }, [isLowerCaseCheckced]);

  useEffect(() => {
    if (isNumbersChecked === true) {
      setPasswordChars((prev) => [...prev, '123456789']);
    }
    if (isNumbersChecked === false) {
      setPasswordChars((prev) =>
        prev.filter((chars) => {
          return chars !== '123456789';
        })
      );
    }
  }, [isNumbersChecked]);

  useEffect(() => {
    if (isSymbolsChecked === true) {
      setPasswordChars((prev) => [...prev, '!@#$%^&*()_+']);
    }
    if (isSymbolsChecked === false) {
      setPasswordChars((prev) =>
        prev.filter((chars) => {
          return chars !== '!@#$%^&*()_+';
        })
      );
    }
  }, [isSymbolsChecked]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const defaultValue = e.target.value;
    const valueToNumber = parseFloat(defaultValue);
    const fullNumber = Math.floor((valueToNumber * 16) / 100);
    setCharAmount((prev) => (prev = fullNumber));
  };

  const getValueFromCharArray = () => {
    let characters = '';
    const charactersArray = passwordChars;
    for (const chars of charactersArray) {
      characters = characters + chars;
    }
    return characters;
  };

  const generateRandomPassword = () => {
    let result = '';
    const charactersLength = getValueFromCharArray().length;
    for (let i = 0; i < charAmount; i++) {
      result += getValueFromCharArray().charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    setRandomPassword((prev) => (prev = result));
  };

  useEffect(() => {
    generateRandomPassword();
  }, [
    charAmount,
    isLowerCaseCheckced,
    isUpperCaseCheckced,
    isNumbersChecked,
    isSymbolsChecked,
  ]);

  return (
    <div className={styles.generatorContainer}>
      <h1 className={styles.generatorHeader}>Password Generator</h1>
      <div className={styles.rangeContainer}>
        <div className={styles.rangeContainerHeader}>
          <h2>Character Length</h2>
          <h1>{charAmount}</h1>
        </div>
        <RangeSlider
          minLength={4}
          maxLength={16}
          step={1}
          defaultValue={40}
          name='strenght'
          id='strenght'
          onChange={handleRangeChange}
        />
      </div>
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
      <PasswordOutput onClick={generateRandomPassword}>
        {randomPassword.length === 0 && <p>Password length cannot be 0</p>}
        {randomPassword}
      </PasswordOutput>
      <Button className={styles.copyButton} variant='primary'>
        <Icon name='copy' size={20} /> Copy Password
      </Button>
    </div>
  );
};
