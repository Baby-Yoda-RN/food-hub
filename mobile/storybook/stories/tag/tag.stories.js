import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import {PriceTag, RatingTag, Section, Container} from '../../../src/components';
import CenterView from '../CenterView';
import {styles} from './tag.style';

storiesOf('Tag', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Container>
      <View style={styles.topLeftTag}>
        <PriceTag price={2} />
      </View>
      <View style={styles.bottomTags}>
        <RatingTag usersVoted={20} rating={3} />
      </View>
    </Container>
  ));
