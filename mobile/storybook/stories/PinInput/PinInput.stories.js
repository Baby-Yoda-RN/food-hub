import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {PinInput} from '../../../src/components';
import CenterView from '../CenterView';

storiesOf('PinInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <PinInput keyBoardType="numeric" digitCount={4} />);
