import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Icon} from '../../../src/components';
import CenterView from '../CenterView';
import {color, size} from '../../../src/theme';

storiesOf('Icon', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Bag', () => (
    <Icon name="Bag" fill={color.primary} height={size.xxl} width={size.xxl} />
  ))
  .add('Bag Disabled', () => (
    <Icon name="Bag" fill={color.greyDisabled} height={size.xxl} width={size.xxl} />
  ))
  .add('Pin', () => (
    <Icon name="Pin" fill={color.primary} height={size.xxl} width={size.xxl} />
  ))
  .add('Pin Disabled', () => (
    <Icon name="Pin" fill={color.greyDisabled} height={size.xxl} width={size.xxl} />
  ))
 
