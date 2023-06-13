import React from 'react';
import styles from './CheckBox.module.scss';
import clsx from 'clsx';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  id: string;
  labelText?: string;
}

export const CheckBox = ({
  className,
  name,
  id,
  labelText,
  ...props
}: CheckBoxProps) => {
  return (
    <div className={styles.checkBoxContainer}>
      <input
        className={clsx(styles.checkBox, className)}
        type='checkbox'
        name={name}
        id={id}
      />
      {labelText && (
        <label className={styles.label} htmlFor={name}>
          {labelText}
        </label>
      )}
    </div>
  );
};
