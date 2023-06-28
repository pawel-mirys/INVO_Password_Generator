import React, { createContext, useState, useContext, useEffect } from 'react';
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
  isUpperCaseCheckced: boolean;
  isLowerCaseCheckced: boolean;
  isNumbersChecked: boolean;
  isSymbolsChecked: boolean;
  generateRandomPassword: () => void;
  setCharacterAmount: (numberOfCharacters: number) => void;
  handleOptionCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
} | null>(null);

export const GeneratorContextProvider = ({ children }: ContextProps) => {
  const [charAmount, setCharAmount] = useState(6);
  const [randomPassword, setRandomPassword] = useState('');
  const [passwordChars, setPasswordChars] = useState(
    'abcdefghijklmnopqrstuwvxyz'
  );
  const [isUpperCaseCheckced, setIsUpperCaseCheckced] = useState(false);
  const [isLowerCaseCheckced, setIsLowerCaseCheckced] = useState(true);
  const [isNumbersChecked, setIsNumbersCheckced] = useState(false);
  const [isSymbolsChecked, setIsSymbolsCheckced] = useState(false);

  const handleOptionCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'uppercase':
        setIsUpperCaseCheckced((prev) => !prev);
        if (e.target.checked === true) {
          setPasswordChars((prev) => (prev += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
        } else {
          setPasswordChars((prev) =>
            prev.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '')
          );
        }
        break;
      case 'lowercase':
        setIsLowerCaseCheckced((prev) => !prev);
        if (e.target.checked === true) {
          setPasswordChars((prev) => (prev += 'abcdefghijklmnopqrstuwvxyz'));
        } else {
          setPasswordChars((prev) =>
            prev.replace('abcdefghijklmnopqrstuwvxyz', '')
          );
        }
        break;
      case 'numbers':
        setIsNumbersCheckced((prev) => !prev);
        if (e.target.checked === true) {
          setPasswordChars((prev) => (prev += '123456789'));
        } else {
          setPasswordChars((prev) => prev.replace('123456789', ''));
        }
        break;
      case 'symbols':
        setIsSymbolsCheckced((prev) => !prev);
        if (e.target.checked === true) {
          setPasswordChars((prev) => (prev += '!@#$%^&*()_+'));
        } else {
          setPasswordChars((prev) => prev.replace('!@#$%^&*()_+', ''));
        }
        break;
    }
  };

  const setCharacterAmount = (numberOfCharacters: number) => {
    setCharAmount((prev) => (prev = numberOfCharacters));
  };

  const generateRandomPassword = () => {
    let result = '';
    const charactersLength = passwordChars.length;
    for (let i = 0; i < charAmount; i++) {
      result += passwordChars.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    setRandomPassword((prev) => (prev = result));
  };

  useEffect(() => {
    generateRandomPassword();
  }, [
    charAmount,
    isLowerCaseCheckced,
    isUpperCaseCheckced,
    isNumbersChecked,
    isSymbolsChecked,
  ]);

  return (
    <GeneratorContext.Provider
      value={{
        charAmount,
        randomPassword,
        isUpperCaseCheckced,
        isLowerCaseCheckced,
        isNumbersChecked,
        isSymbolsChecked,
        generateRandomPassword,
        setCharacterAmount,
        handleOptionCheck,
      }}>
      {children}
    </GeneratorContext.Provider>
  );
};
