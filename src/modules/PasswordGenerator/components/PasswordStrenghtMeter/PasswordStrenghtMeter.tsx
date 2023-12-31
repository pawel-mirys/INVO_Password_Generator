import React from 'react';
import styles from './PasswordStrenghtMeter.module.scss';
import { StrenghtBar } from '../StrenghtBar/StrenghtBar';
import zxcvbn from 'zxcvbn';
import { useGeneratorContext } from '../../contexts/GeneratorContext';

export const PasswordStrenghtMeter = () => {
  const generatorContext = useGeneratorContext();
  const evaluation = zxcvbn(generatorContext!.randomPassword);

  return (
    <div className={styles.strenghtMeterContainer}>
      <div className={styles.strenghtMeterHeader}>
        <h2>Strenght</h2>
        {evaluation.score <= 2 && (
          <p className={styles.value}>Low password strength</p>
        )}

        {evaluation.score === 3 && (
          <p className={styles.value}>Average password strength</p>
        )}
        {evaluation.score === 4 && (
          <p className={styles.value}>High password strength</p>
        )}
      </div>
      <div className={styles.strenghtMeter}>
        {evaluation.score <= 1 && (
          <>
            <StrenghtBar variant='poor' />
            <StrenghtBar variant='default' />
            <StrenghtBar variant='default' />
            <StrenghtBar variant='default' />
          </>
        )}
        {evaluation.score === 2 && (
          <>
            <StrenghtBar variant='poor' />
            <StrenghtBar variant='poor' />
            <StrenghtBar variant='default' />
            <StrenghtBar variant='default' />
          </>
        )}
        {evaluation.score === 3 && (
          <>
            <StrenghtBar variant='weak' />
            <StrenghtBar variant='weak' />
            <StrenghtBar variant='weak' />
            <StrenghtBar variant='default' />
          </>
        )}
        {evaluation.score === 4 && (
          <>
            <StrenghtBar variant='strong' />
            <StrenghtBar variant='strong' />
            <StrenghtBar variant='strong' />
            <StrenghtBar variant='strong' />
          </>
        )}
      </div>
    </div>
  );
};
