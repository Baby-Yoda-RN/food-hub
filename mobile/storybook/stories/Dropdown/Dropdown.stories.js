import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import {Dropdown} from '../../../src/components';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';
import {styles} from './Dropdown.style';

storiesOf('Dropdown', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <View>
      <Dropdown
        data={[
          {label: 'Item 1', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'},
        ]}></Dropdown>
    </View>
  ));
