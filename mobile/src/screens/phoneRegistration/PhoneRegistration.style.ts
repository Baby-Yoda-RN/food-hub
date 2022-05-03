import {StyleSheet} from 'react-native';
import {size, color, font} from '../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    padding: size.rg,
  },
  backIconStyle: {
    backgroundColor: 'white',
    borderRadius: size.md,
  },
  title: {
    fontFamily: font.semiBold,
    fontSize: size.lg,
    color: color.black,
    marginTop: size.xl,
  },
  subtitle: {
    marginBottom: size.lg,
  },
  textInputContainer: {
    shadowColor: color.black,
  },
  buttonText: {
    fontFamily: font.regular,
  },
  buttonContainer: {
    marginTop: size.lg,
    padding: size.rg,
    shadowColor: color.black,
    elevation: size.lg,
  },
});
