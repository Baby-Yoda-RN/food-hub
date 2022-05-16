import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Badge, Section} from '../../../src/components';
import CenterView from '../CenterView';
import {styles} from './Badge.style';

storiesOf('Badge', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <>
      <Section style={styles.section}>
        <Badge value={1} />
      </Section>
      <Section style={styles.section}>
        <Badge value={4.5} />
      </Section>
      <Section style={styles.section}>
        <Badge value={9.9} containerStyle={styles.orange} />
      </Section>
    </>
  ));
