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
      <Section style={[styles.section, {borderWidth: 1}]}>
        <Footer divider="sign in with" dividerTextStyle={{color: color.greyDisabled}} dividerStyle={{borderColor: color.greyDisabled}} />
      </Section>
      <Section style={{ backgroundColor: 'black'}}>
        <Footer isEmailorPhone={true} divider="sign in with" />
      </Section>
    </>
  ));
