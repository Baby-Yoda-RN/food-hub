import {StyleSheet} from 'react-native';
import {color, size} from '../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    width: '66%',
    height: '07%',
  
  },
  buttonDisabled: {
    backgroundColor: color.lightGray,
  },
  buttonEnabled: {
    backgroundColor: color.primary,
  },
  title: {
    color: 'white',
    fontSize: 15,
    lineHeight: 15,
    textAlign: 'center',
  },
});