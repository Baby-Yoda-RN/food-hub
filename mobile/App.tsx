import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import StorybookUIRoot from './storybook';

const App = () => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);

  return <StorybookUIRoot />;
};

export default App;
