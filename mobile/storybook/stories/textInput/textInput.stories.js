import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';
import {TextInputComponent} from './textInput.stories.view';
storiesOf('TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => <TextInputComponent />);
