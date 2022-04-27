import { storiesOf } from '@storybook/react-native';
import React from 'react';
import {Badge} from '../../../src/components';
import CenterView from '../CenterView';

storiesOf('Badge', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Badge value={0} />
  ))
