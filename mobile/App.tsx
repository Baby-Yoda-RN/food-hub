import React from 'react';
import {Text} from 'react-native';
import { SideMenu } from './src/components/sidemenu/SideMenu';
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
