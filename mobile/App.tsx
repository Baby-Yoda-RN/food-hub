import React, {useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {OrderCard} from './src/components/orderCard/OrderCard';
import SplashScreen from 'react-native-splash-screen';
import {TOrder} from './src/types/data';

//mock data
const orders: Array<TOrder> = [
  {
    uuid: '264100',
    restaurantName: 'Starbucks',
    items: 3,
    date: '20 Jun, 2021',
    status: 'On the run',
    delivered: false,
    estimatedTime: '25 min',
    restaurantImage:
      'https://w7.pngwing.com/pngs/282/834/png-transparent-seattle-s-best-coffee-the-starbucks-coffee-logo-coffee.png',
  },
  {
    uuid: '264101',
    restaurantName: "Jersey Mike's",
    items: 3,
    date: '20 Jun, 2021',
    status: 'Order Delivered',
    delivered: true,
    total: '$25.19',
    restaurantImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Jersey_Mike%27s_logo.svg/2560px-Jersey_Mike%27s_logo.svg.png',
  },
];

const App = () => {
  const message: string = 'Testing Text';
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);
  return (
    <ScrollView>
      <Text>{message}</Text>
      <TextInput type="regular" />
      <TextInput type="password" />
      <TextInput type="search" />
      <TextInput type="phone" />
      <Icon name="Heart" height={100} width={100} fill="orange" />
      <Icon name="Bullet" height={10} width={10} fill="green" />
      {orders.map(order => {
        return (
          <OrderCard
            order={order}
            key={order.uuid}
            leftButtonTitle={order.delivered ? 'Rate' : 'Cancel'}
            rightButtonTitle={order.delivered ? 'Track Order' : 'Re-Order'}
          />
        );
      })}
    </ScrollView>
  );
};

export default App;
