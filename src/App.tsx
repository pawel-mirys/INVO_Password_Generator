import React from 'react';
import { HomePage } from './modules/Home/pages/HomePage/HomePage';
import { GeneratorContextProvider } from './modules/PasswordGenerator/contexts/GeneratorContext';

const App: React.FC = () => (
  <>
    <GeneratorContextProvider>
      <HomePage />
    </GeneratorContextProvider>
  </>
);

export default App;
