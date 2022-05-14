import {StyleSheet} from 'react-native';
import {color, size} from 'theme';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const ratio = windowWidth / 375;

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: color.white,
  },
  container: {
    flexGrow: 1,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: size.rg,
  },
  header: {
    zIndex: 1,
    elevation: 1,
  },
  footer: {
    zIndex: 1,
    elevation: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageContainer: {
    flex: 1,
    height: 91 * ratio,
  },
});
