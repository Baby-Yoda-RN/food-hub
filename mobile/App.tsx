import React from 'react';
import {Text} from 'react-native';
import { AppNavigation } from './src/navigation/AppNavigation';

const App = () => {
  const message: string = 'Testing Text';
  return (
    <>
    <AppNavigation />
    </>
  );
};

export default App;
