import React, {FC} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Container, Header} from '../../components';
import {OrderCard} from '../../components/orderCard/OrderCard';
import {styles} from './MyOrders.style';
import {TMyOrdersScreenView} from './MyOrders.type';

export const MyOrdersView: FC<TMyOrdersScreenView> = ({
  upcomingOrders,
  lastOrders,
}) => {
  return (
    <Container>
      <ScrollView nestedScrollEnabled>
        <Header
          leftIconName="ChevronLeft"
          iconHeight={20}
          iconWidth={20}
          rightIconLocation="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          title="My Orders"
        />
        {upcomingOrders?.map(order => {
          return (
            <OrderCard
              leftButtonTitle="Cancel"
              rightButtonTitle="Track Order"
              order={order}
              key={order.uuid}
            />
          );
        })}
        <Text style={styles.lastOrders}>Last Orders</Text>
        {lastOrders?.map(order => {
          return (
              <OrderCard
                key={order.uuid}
                leftButtonTitle="Rate"
                rightButtonTitle="Re-Order"
                order={order}
              />
          );
        })}
      </ScrollView>
    </Container>
  );
};
