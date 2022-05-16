import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {RatingStars, Section} from '../../../src/components';
import CenterView from '../CenterView';

storiesOf('RatingStars', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Section>
      <RatingStars />
    </Section>
  ));
