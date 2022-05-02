import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Container, Header, ToggleButton} from '../../components';
import {OrderCard} from '../../components/orderCard/OrderCard';
import {color} from '../../theme';
import {styles} from './MyOrders.style';
import {TMyOrdersScreenView} from './MyOrders.type';

export const MyOrdersView: FC<TMyOrdersScreenView> = ({
  upcomingOrders,
  lastOrders,
  showUpcoming = true,
}) => {
  return (
    <Container
      header={
        <Header
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
          selectionMode={true}
          buttonTheme={color.primary}
          switchData={true}
        />
      </View>
      {showUpcoming && upcomingOrders?.map(order => {
        return (
          <OrderCard
            leftButtonTitle="Cancel"
            rightButtonTitle="Track Order"
            order={order}
            key={order.uuid}
          />
        );
      })}
      {showUpcoming && <Text style={styles.lastOrders}>Past Orders</Text>}
      {lastOrders?.map(order => {
        return (
          <>
            <OrderCard
              key={order.uuid}
              leftButtonTitle="Rate"
              rightButtonTitle="Re-Order"
              order={order}
            />
            <View key={Number(order.uuid) + 0.5} style={styles.divider} />
          </>
        );
      })}
    </Container>
  );
};
