import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {Container, Header, ToggleButton} from '../../components';
import {OrderCard} from '../../components/orderCard/OrderCard';
import {color, size} from '../../theme';
import {styles} from './MyOrders.style';
import {TMyOrdersScreenView} from './MyOrders.type';

export const MyOrdersScreenView: FC<TMyOrdersScreenView> = ({
  upcomingOrders,
  lastOrders,
  showUpcomingOrders = true,
  setShowUpcomingOrders
}) => {

  return (
    <Container
      header={
        <Header
          containerStyle={styles.header}
          leftIconName="ChevronLeft"
          iconHeight={20}
          iconWidth={20}
          rightIconLocation="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          title="My Orders"
        />
      }>
      <View style={styles.toggleButtonContainer}>
        <ToggleButton
          primaryText={'Upcoming'}
          secondaryText={'History'}
          buttonTheme={color.primary}
          option={showUpcomingOrders}
          setOption={setShowUpcomingOrders}
        />
      </View>
      {showUpcomingOrders &&
        upcomingOrders?.map(order => {
          return (
            <OrderCard
              leftButtonTitle="Cancel"
              rightButtonTitle="Track Order"
              order={order}
              key={order.uuid}
            />
          );
        })}
      {showUpcomingOrders && <Text style={styles.pastOrders}>Past Orders</Text>}
      {lastOrders?.map(order => {
        return (
          <View key={Number(order.uuid) + 0.1} style={styles.divider}>
            <OrderCard
              key={order.uuid}
              leftButtonTitle="Rate"
              rightButtonTitle="Re-Order"
              order={order}
            />
          </View>
        );
      })}
    </Container>
  );
};
