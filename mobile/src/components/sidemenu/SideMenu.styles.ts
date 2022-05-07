import { StyleSheet } from 'react-native';
import { size, color, font } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: size.rg,
    backgroundColor: color.white,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    borderRadius: size.xl,
    height: size.xl,
    width: size.xl,
  },
  name: {
    color: color.black,
    fontSize: size.rg,
    marginVertical: size.xs,
    fontFamily: font.semiBold,
  },
  email: {
    fontSize: size.rg,
    marginVertical: size.xs,
  },
  itemContainer: {
    marginVertical: size.rg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    padding: 0,
  },
  itemText: {
    color: color.black,
    fontSize: size.rg,
    fontFamily: font.semiBold,
    marginHorizontal: size.rg,
  },
  button: {
    backgroundColor: color.primary,
    borderRadius: size.xl,
    alignItems: 'center',
    padding: size.sm,
    alignSelf: 'flex-start',
    marginTop: 'auto',
  },
  buttonText: {
    color: color.white,
    marginHorizontal: size.sm,
  },
  buttonIconContainer: {
    backgroundColor: color.white,
    borderRadius: size.xl,
    height: size.lg,
    width: size.lg,
  },

});