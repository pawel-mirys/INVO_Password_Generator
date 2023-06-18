import React from 'react';
import styles from './RangeSlider.module.scss';
import clsx from 'clsx';

interface RangeSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  minLength: number;
  maxLength: number;
  step: number;
  defaultValue: number;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RangeSlider = ({
  className,
  minLength,
  maxLength,
  step,
  defaultValue,
  name,
  id,
  onChange,
  ...props
}: RangeSliderProps) => {
  return (
    <input
      className={clsx(styles.rangeSlider, className)}
      onChange={onChange}
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
