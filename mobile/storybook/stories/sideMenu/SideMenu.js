import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {SideMenu, Section} from '../../../src/components';
import CenterView from '../CenterView';
import {styles} from './SideMenu.style';
import {Alert} from 'react-native';

storiesOf('SideMenu', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Section style={styles.container}>
      <SideMenu
        image="https://i.imgur.com/imwXQ08.png"
        name="John Smith"
        email="john.smith@example.com"
        pressOrder={() => Alert.alert('My Order Pressed')}
        pressProfile={() => Alert.alert('My Profile Pressed')}
        pressDelivery={() => Alert.alert('Delivery Addressed Pressed')}
        pressCart={() => Alert.alert('Cart Pressed')}
        pressReview={() => Alert.alert('Reviews Pressed')}
        pressCategory={() => Alert.alert('Category Pressed')}
        pressLogout={() => Alert.alert('Logout Pressed')}
      />
    </Section>
  ));
