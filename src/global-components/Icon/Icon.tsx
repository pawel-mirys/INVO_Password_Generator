import React from 'react';
import styles from './Icon.module.scss';
import clsx from 'clsx';

type IconProps = {
  name?: string;
  size?: number;
  className?: string;
};

export const Icon = ({ name = 'book', size = 25, className }: IconProps) => {
  return (
    <img
      width={size}
      height={size}
      className={clsx(styles.icon, className)}
      src={`/src/assets/icons/${name}.svg`}
      alt={`${name} icon`}
    />
  );
};
