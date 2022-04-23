import React from 'react';
import {Text, View} from 'react-native';
import {Card} from './src/components/card/card';
const App = () => {
  const message: string = 'Testing Text';

  return (
    <View>
      <Text>Testing Text</Text>
      <Card />
    </View>
  );
};

export default App;
