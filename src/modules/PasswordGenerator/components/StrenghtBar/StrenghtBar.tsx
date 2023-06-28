import React from 'react';
import styles from './StrenghtBar.module.scss';
import clsx from 'clsx';

const strenghtBarVariant = {
  default: styles.strenghtBar__default,
  poor: styles.strenghtBar__poor,
  weak: styles.strenghtBar__weak,
  strong: styles.strenghtBar__strong,
};

type StrenghtBarProps = {
  variant?: keyof typeof strenghtBarVariant;
};

export const StrenghtBar = ({ variant = 'default' }: StrenghtBarProps) => {
  return (
    <div
      className={clsx(
        styles.strenghtBar,
        variant && strenghtBarVariant[variant]
      )}></div>
  );
};
