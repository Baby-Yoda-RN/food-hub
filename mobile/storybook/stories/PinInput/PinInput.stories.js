import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {PinInput} from '../../../src/components';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';

storiesOf('PinInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Container isScrollViewDisabled={false}>
      <Section>
        <PinInput keyBoardType="numeric" digitCount={5} />
      </Section>
      <Section>
        <PinInput keyBoardType="numeric" digitCount={4} />
      </Section>
      <Section>
        <PinInput keyBoardType="numeric" digitCount={3} />
      </Section>
      <Section>
        <PinInput keyBoardType="numeric" digitCount={2} />
      </Section>
    </Container>
  ));
