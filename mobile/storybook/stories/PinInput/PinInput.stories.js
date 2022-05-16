import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {PinInput} from '../../../src/components';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';
import {styles} from './PinInput.style';

storiesOf('PinInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Container isScrollViewDisabled={false}>
      <Section style={styles.section}>
        <PinInput
          keyBoardType="numeric"
          digitCount={5}
          textInputStyle={styles.input}
        />
      </Section>
      <Section style={styles.section}>
        <PinInput
          keyBoardType="numeric"
          digitCount={4}
          textInputStyle={styles.input}
        />
      </Section>
      <Section style={styles.section}>
        <PinInput
          keyBoardType="numeric"
          digitCount={3}
          textInputStyle={styles.input}
        />
      </Section>
      <Section style={styles.section}>
        <PinInput
          keyBoardType="numeric"
          digitCount={2}
          textInputStyle={styles.input}
        />
      </Section>
    </Container>
  ));
