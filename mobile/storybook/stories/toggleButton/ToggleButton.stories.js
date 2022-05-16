import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {ToggleButton, Section} from '../../../src/components';
import CenterView from '../CenterView';
import {color} from '../../../src/theme';

storiesOf('ToggleButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Section style={{}}>
      <ToggleButton
        primaryText="Selected"
        secondaryText="Unselected"
        buttonTheme={color.primary}
        option={true}
        setOption={() => {}}
      />
    </Section>
  ));
