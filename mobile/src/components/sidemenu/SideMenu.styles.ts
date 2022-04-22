import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    height: '100%',
  },
  image: {
    borderRadius: 100,
    height: 70,
    width: 70,
  },
  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 3.5,
  },
  email: {
    fontSize: 14,
    marginVertical: 3.5,
  },
  itemContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 17,
  },
  icon: {
    height: 19,
    width: 17,
  },
  button: {
    backgroundColor: '#FE724C',
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 32,
    left: 22,
  },
  logoutIcon: {
    borderRadius: 100,
    height: 29,
    width: 29,
    marginLeft: 9,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    margin: 15,
  },
});
