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

  const review: TReview = {
    name: 'Charlie Rizzuti',
    date: '04/29/2022',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBO3PQB2Aza-xNuCspCSD-7envplmE5gkbg&usqp=CAU',
    reviewScore: 5,
    reviewText: 'Very good food. Fast delivery.',
  };
  return <Router/>;
};

export default App;
