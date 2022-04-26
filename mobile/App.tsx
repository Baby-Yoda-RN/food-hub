import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from './src/components/textInput/TextInput';
import {Icon} from './src/components';
import {OrderCard} from './src/components/orderCard/OrderCard';
import SplashScreen from 'react-native-splash-screen';
import {IOrder} from './src/types/data';

const App = () => {
  const order: IOrder = {
    uuid: '264100',
    restaurantName: 'Starbucks',
    items: [1, 2, 3],
    date: '20 Jun, 2021',
    status: 'On the run',
    delivered: false,
    estimatedTime: '25 min',
    restaurantImage:
      'https://w7.pngwing.com/pngs/282/834/png-transparent-seattle-s-best-coffee-the-starbucks-coffee-logo-coffee.png',
  };

  const order2: IOrder = {
    uuid: '264100',
    restaurantName: "Jersey Mike's",
    items: [1, 2, 3],
    date: '20 Jun, 2021',
    status: 'Order Delivered',
    delivered: true,
    total: '$25.19',
    restaurantImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Jersey_Mike%27s_logo.svg/2560px-Jersey_Mike%27s_logo.svg.png',
  };

  // const message: string = 'Testing Text';
  useEffect(() => {
    setTimeout(() => {}, 1000);
    SplashScreen.hide();
  }, []);
  // return (
  //   <>
  //     <Text>{message}</Text>
  //     <TextInput type="regular" />
  //     <TextInput type="password" />
  //     <TextInput type="search" />
  //     <TextInput type="phone" />
  //     <Icon name="Heart" height={100} width={100} fill='orange' />
  //     <Icon name="Bullet" height={10} width={10} fill='green' />
  //   </>
  // );
  return (
    <View style={{padding:20, flex:1, justifyContent:'space-evenly'}}>
      <OrderCard order={order} />
      <OrderCard order={order2} />
    </View>
  );
};

export default App;
