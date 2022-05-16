import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';
import {styles} from './container.style';
import {ContainerComponent} from './container.stories.view';

storiesOf('Container', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <ContainerComponent />);
