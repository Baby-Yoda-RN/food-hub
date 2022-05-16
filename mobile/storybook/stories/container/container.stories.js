import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';
import {styles} from './container.style';

storiesOf('Container', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Container isScrollViewDisabled={false} style={styles.container}>
      <View style={styles.viewStyle1}>
        <Text style={styles.text}>{'Item 1'}</Text>
      </View>
      <View style={styles.viewStyle2}>
        <Text style={styles.text}>{'Item 2'}</Text>
      </View>
      <View style={styles.viewStyle3}>
        <Text style={styles.text}>{'Item 3'}</Text>
      </View>
    </Container>
  ));
