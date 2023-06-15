import React from 'react';
import styles from './PasswordOutput.module.scss';
import clsx from 'clsx';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';

type PasswordOutputProps = {
  value: string;
  className: string;
};

export const PasswordOutput = ({ value, className }: PasswordOutputProps) => {
  return (
    <div className={clsx(styles.passwordOutput, className)}>
      PTx1O234DSR%
      <Button
        variant='icon'
        onClick={() => {
          console.log('refresh pswrd');
        }}>
        <Icon name='refresh' size={20} />
      </Button>
    </div>
  );
};
