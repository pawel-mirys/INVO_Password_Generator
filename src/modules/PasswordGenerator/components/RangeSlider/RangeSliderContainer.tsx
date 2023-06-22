import React from 'react';
import styles from './RangeSlider.module.scss';
import clsx from 'clsx';
import { useGeneratorContext } from '../../contexts/GeneratorContext';
interface RangeSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  minLength: number;
  maxLength: number;
  step: number;
  defaultValue: number;
  name: string;
  id: string;
}

export const RangeSliderContainer = ({
  className,
  minLength,
  maxLength,
  step,
  defaultValue,
  name,
  id,
  ...props
}: RangeSliderProps) => {
  const generatorContext = useGeneratorContext();

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const defaultValue = e.target.value;
    const valueToNumber = parseFloat(defaultValue);
    const fullNumber = Math.floor((valueToNumber * 16) / 100);
    generatorContext?.setCharacterAmount(fullNumber);
  };

  return (
    <input
      className={clsx(styles.rangeSlider, className)}
      onChange={(e) => {
        handleRangeChange(e);
      }}
      minLength={minLength}
      maxLength={maxLength}
      defaultValue={defaultValue}
      step={step}
      type='range'
      name={name}
      id={id}
    />
  );
};
