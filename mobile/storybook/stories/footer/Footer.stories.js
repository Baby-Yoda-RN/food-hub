import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Footer, Section} from '../../../src/components';
import CenterView from '../CenterView';
import {size, color} from '../../../src/theme';
import {styles} from './Footer.style';

storiesOf('Footer', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <>
      <Section style={[styles.section, styles.login]}>
        <Footer
          divider="sign in with"
          dividerTextStyle={styles.dividerText}
          dividerStyle={styles.divider}
        />
      </Section>
      <Section style={[styles.section, styles.welcome]}>
        <Footer isEmailorPhone={true} divider="sign in with" />
      </Section>
    </>
  ));
