import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

export const PinInput: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
