import React from 'react';
import {Router} from './src/navigation/router/Router';
import {NavigationContainer} from '@react-navigation/native';
import {AppTheme} from './src/theme/';
import {GlobalProvider} from './src/context/global/global.provider';
import { globalInitialState, globalReducer } from './src/context/global/';

const App = () => {

  return (
    <GlobalProvider state={globalInitialState} reducer={globalReducer}>
      <NavigationContainer theme={AppTheme.white}>
        <Router />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
