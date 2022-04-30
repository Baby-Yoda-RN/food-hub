import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ReviewCard} from './src/components/reviewCard/ReviewCard';
import {Router} from './src/navigation';
import {TReview} from './src/types/data';

const App = () => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);

  return <Router />;
};

export default App;
