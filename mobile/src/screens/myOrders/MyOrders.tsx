import React, { FC, useState } from 'react'
import { TOrder } from '../../types/data';
import { TMyOrdersScreen } from './MyOrders.type'
import { MyOrdersScreenView } from './MyOrders.view'

const orders: Array<TOrder> = [
  {
    uuid: '1234',
    restaurantName: 'Starbucks',
    date: '28 Jan, 10:30',
    status: 'Food on the way',
    items: 4,
    delivered: false,
    restaurantImage:
      'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
    estimatedTime: '25 min',
    total: '16.60',
  },
  {
    uuid: '1235',
    restaurantName: 'Starbucks',
    date: '20 Jan, 10:30',
    status: 'Order Delivered',
    items: 4,
    delivered: true,
    restaurantImage:
      'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
    estimatedTime: '25 min',
    total: '16.60',
  },
  {
    uuid: '1236',
    restaurantName: 'Starbucks',
    date: '19 Jan, 09:30',
    status: 'Order Delivered',
    items: 5,
    delivered: true,
    restaurantImage:
      'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
    estimatedTime: '25 min',
    total: '30.99',
  },
  {
    uuid: '1237',
    restaurantName: 'Starbucks',
    date: '28 Jan, 10:30',
    status: 'Order Delivered',
    items: 4,
    delivered: true,
    restaurantImage:
      'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
    estimatedTime: '25 min',
    total: '19.99',
  },
];

export const MyOrdersScreen:FC<TMyOrdersScreen> = ({navigation}) => {

  const [option, setOption] = useState<boolean>(true)

  return (
    <MyOrdersScreenView 
    showUpcomingOrders={option}
    setShowUpcomingOrders={setOption}
    upcomingOrders={orders.filter(order => {
      return order.delivered === false
    })}
    lastOrders={orders.filter(order => {
      return order.delivered
    })}
    leftPress={() => navigation.goBack()}
    />
  )
}
