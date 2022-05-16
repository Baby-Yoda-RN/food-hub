import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import {OrderCard} from '../../../src/components/orderCard/OrderCard';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';

storiesOf('OrderCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <View>
      <OrderCard
        leftButtonTitle="Rate"
        rightButtonTitle="Re-Order"
        order={{
          restaurantName: 'Starbucks',
          date: '28 Jan, 10:30',
          status: 'Food on the way',
          items: 4,
          delivered: false,
          restaurantImage:
            'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
          estimatedTime: '25 min',
          total: '16.60',
        }}
      />
    </View>
  ));
