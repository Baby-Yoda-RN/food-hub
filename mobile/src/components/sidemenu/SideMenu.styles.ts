import { StyleSheet } from 'react-native';
import { size, color } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: size.rg,
    height: '100%',
  },
  image: {
    borderRadius: size.xl,
    height: size.xl,
    width: size.xl,
  },
  name: {
    color: color.black,
    fontSize: size.rg,
    fontWeight: 'bold',
    marginVertical: size.xs,
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
  itemText: {
    color: color.black,
    fontSize: size.rg,
    fontWeight: 'bold',
    marginHorizontal: size.rg,
  },
  button: {
    backgroundColor: color.primary,
    borderRadius: size.xl,
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginTop: 'auto',
  },
  logoutIcon: {
    borderRadius: size.xl,
    height: size.lg,
    width: size.lg,
    marginLeft: size.sm,
  },
  buttonText: {
    color: color.white,
    fontWeight: 'bold',
    marginRight: size.sm,
  },
  buttonIconContainer: {
    backgroundColor: 'white',
    borderRadius: size.xl,
    margin: size.sm,
  },
});
