import React, { createContext, useEffect, useState, useContext } from 'react';

export const useGeneratorContext = () => {
  const context = useContext(GeneratorContext);
  return context;
};

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

const GeneratorContext = createContext<{
  charAmount: number;
  randomPassword: string;
  passwordChars: string[];
  setCharacterAmount: (numberOfCharacters: number) => void;
  generateRandomPassword: () => void;
} | null>(null);

export const GeneratorContextProvider = ({ children }: ContextProps) => {
  const [charAmount, setCharAmount] = useState(6);
  const [randomPassword, setRandomPassword] = useState('');
  const [passwordChars, setPasswordChars] = useState<string[]>([
    'abcdefghijklmnopqrstuvwxyz',
  ]);

  const setCharacterAmount = (numberOfCharacters: number) => {
    setCharAmount((prev) => (prev = numberOfCharacters));
  };

  const getValueFromCharArray = () => {
    let characters = '';
    const charactersArray = passwordChars;
    for (const chars of charactersArray) {
      characters = characters + chars;
    }
    return characters;
  };

  const generateRandomPassword = () => {
    let result = '';
    const charactersLength = getValueFromCharArray().length;
    for (let i = 0; i < charAmount; i++) {
      result += getValueFromCharArray().charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    setRandomPassword((prev) => (prev = result));
  };

  return (
    <GeneratorContext.Provider
      value={{
        charAmount,
        randomPassword,
        passwordChars,
        setCharacterAmount,
        generateRandomPassword,
      }}>
      {children}
    </GeneratorContext.Provider>
  );
};
