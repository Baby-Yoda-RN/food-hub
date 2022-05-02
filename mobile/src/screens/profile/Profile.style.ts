import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  profileContainer: {
    backgroundColor: color.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: size.rg,
    flexFlow: 'column',
  },
  inputContainer: {
    backgroundColor: color.white,
    padding: size.rg,
    flexFlow: 'column',
  },
  backgroundImageContainer: {
    position: 'absolute',
    backgroundColor: color.white,
  },
  header: {
    padding: size.sm,
    backgroundColor: color.white,
  },
  name: {
    color: color.black,
    marginVertical: size.sm,
    fontSize: size.rg,
  },
  text: {
    color: color.grayMid,
    marginVertical: size.sm,
    fontSize: size.rg,
  },
  button: {
    marginVertical: size.rg,
    paddingVertical: size.rg,
  },
  image: {
    borderRadius: 100,
    alignItems: 'center',
    height: size.xxl,
    width: size.xxl,
  },
});
