import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigation} from './src/navigation/AppNavigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);
  return <AppNavigation />;
};

export default App;
