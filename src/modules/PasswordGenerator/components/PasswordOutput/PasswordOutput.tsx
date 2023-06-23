import React from 'react';
import { PasswordOutputContainer } from './PasswordOutputContainer';
import { useGeneratorContext } from '../../contexts/GeneratorContext';

export const PasswordOutput = () => {
  const generatorContext = useGeneratorContext();

  return (
    <PasswordOutputContainer
      onClick={() => {
        generatorContext?.generateRandomPassword();
      }}>
      {generatorContext?.randomPassword.length === 0 && (
        <p>Password length cannot be 0</p>
      )}
      {generatorContext?.randomPassword}
    </PasswordOutputContainer>
  );
};
