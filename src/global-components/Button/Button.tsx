import React from 'react';
import styles from './Button.module.scss';
import { clsx } from 'clsx';

const buttonType = {
  primary: styles.button__primary,
  icon: styles.button__icon,
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant: keyof typeof buttonType;
  onClick?: () => void;
}

export const Button = ({
  className,
  children,
  onClick,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, variant && buttonType[variant])}
      onClick={onClick}>
      {children}
    </button>
  );
};
