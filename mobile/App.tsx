import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Router} from './src/navigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);
  return <Router />;
};

export default App;
