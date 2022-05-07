import React from 'react';
import {Router} from './src/navigation/router/Router';
import {NavigationContainer} from '@react-navigation/native';
import {AppTheme} from './src/theme/';

const App = () => {
  return (
    <NavigationContainer theme={AppTheme.white}>
      <Router />
    </NavigationContainer>
  );
};

export default App;
