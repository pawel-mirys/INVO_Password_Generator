import React from 'react';
import styles from './RangeSlider.module.scss';
import clsx from 'clsx';

interface RangeSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  minLength: number;
  maxLength: number;
  name: string;
  id: string;
}

export const RangeSlider = ({
  className,
  minLength,
  maxLength,
  name,
  id,
  ...props
}: RangeSliderProps) => {
  return (
    <input
      className={clsx(styles.rangeSlider, className)}
      minLength={minLength}
      maxLength={maxLength}
      type='range'
      name={name}
      id={id}
    />
  );
};
