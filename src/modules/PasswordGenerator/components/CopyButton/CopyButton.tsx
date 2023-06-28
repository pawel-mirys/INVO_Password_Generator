import React, { useState } from 'react';
import styles from './CopyyButton.module.scss';
import { Button } from '@/global-components/Button/Button';
import { Icon } from '@/global-components/Icon/Icon';

import CopyToClipboard from 'react-copy-to-clipboard';
import 'react-notifications-component/dist/theme.css';
import { Store } from 'react-notifications-component';
import { useGeneratorContext } from '../../contexts/GeneratorContext';

export const CopyButton = () => {
  const generatorContext = useGeneratorContext();

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    setIsCopied(true);
    Store.addNotification({
      title: 'Success!',
      message: 'Your new password has been copied!',
      type: 'default',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    setTimeout(() => {
      setIsCopied(false);
      generatorContext?.generateRandomPassword();
    }, 1000);
  };

  return (
    <CopyToClipboard
      text={generatorContext!.randomPassword}
      onCopy={handleCopyToClipboard}>
      <Button className={styles.copyButton} variant='primary'>
        <Icon name='copy' size={20} /> Copy Password
      </Button>
    </CopyToClipboard>
  );
};
