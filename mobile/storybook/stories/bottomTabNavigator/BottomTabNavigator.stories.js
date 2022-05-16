import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Section} from '../../../src/components';
import {BottomTabNavigator} from '../../../src/components/bottomTabNavigator/BottomTabNavigator';
import CenterView from '../CenterView';
import {styles} from './BottomTabNavigator.style';

storiesOf('Bottom Tab Nav', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <>
      <Section style={styles.section}>
        <BottomTabNavigator />
      </Section>
    </>
  ));
