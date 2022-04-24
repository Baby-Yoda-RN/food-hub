import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  buttonDisabled: {
    backgroundColor: color.grayDisabled,
  },
  buttonEnabled: {
    backgroundColor: color.primary,
  },
  title: {
    color: color.white,
    fontSize: 13,
    lineHeight: 13,
    textAlign: 'center',
    
  },

});