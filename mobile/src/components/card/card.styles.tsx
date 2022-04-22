import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    backgroundColor: '#fff',
    paddingBottom: 12,
  },
  restaurantInformation: {
    alignItems: 'flex-start',
    marginLeft: 12,
    marginTop: 12,
  },
  restaurantName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deliveryDetails: {
    marginBottom: 6,
    fontSize: 14,
    marginLeft: 12,
  },
  itemTags: {
    borderColor: 'rgba(0, 0, 0, 0.0)',
    borderWidth: 2,
    color: '#8A8E9B',
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 4,
    fontSize: 12,
    marginRight: 4,
  },
  restaurantImage: {
    height: 136,
  },
});
