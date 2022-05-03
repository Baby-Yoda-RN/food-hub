import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Router} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
