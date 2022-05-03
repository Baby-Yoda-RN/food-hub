import React from 'react';
import {Router} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {AppTheme} from './src/theme/apptheme/AppTheme';

const App = () => {
  return (
    <NavigationContainer theme={AppTheme.white}>
      <Router />
    </NavigationContainer>
  );
};

export default App;
