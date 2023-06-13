import React from 'react';
import styles from './Button.module.scss';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={clsx(styles.button, className)}> </button>;
};
