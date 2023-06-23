import React from 'react';
import styles from './PasswordOutput.module.scss';
import clsx from 'clsx';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';

type PasswordOutputProps = {
  value?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const PasswordOutputContainer = ({
  value,
  children,
  className,
  onClick,
}: PasswordOutputProps) => {
  return (
    <div className={clsx(styles.passwordOutput, className)}>
      {children}
      <Button variant='icon' onClick={onClick}>
        <Icon name='refresh' size={20} />
      </Button>
    </div>
  );
};
