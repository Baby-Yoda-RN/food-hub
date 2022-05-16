import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Dropdown} from '../../../src/components';
import CenterView from '../CenterView';

storiesOf('Dropdown', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Dropdown
      data={[
        {label: 'Popular', value: 'popular'},
        {label: 'Price', value: 'price'},
      ]}></Dropdown>
  ));
