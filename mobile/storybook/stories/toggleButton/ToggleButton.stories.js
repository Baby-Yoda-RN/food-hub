import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {ToggleButton, Section} from '../../../src/components';
import CenterView from '../CenterView';
import {color} from '../../../src/theme';
import {styles} from './ToggleButton.style';

storiesOf('ToggleButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <>
      <Section style={styles.section}>
        <ToggleButton
          primaryText="Selected"
          secondaryText="Unselected"
          buttonTheme={color.primary}
          option={true}
          setOption={() => {}}
        />
      </Section>
      <Section style={styles.section}>
        <ToggleButton
          primaryText="Food"
          secondaryText="Restaurant"
          buttonTheme={color.primary}
          option={false}
          setOption={() => {}}
        />
      </Section>
    </>
  ));
