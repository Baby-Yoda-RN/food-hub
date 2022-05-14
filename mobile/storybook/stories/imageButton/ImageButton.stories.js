import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {ImageButton, Section} from '../../../src/components';
import CenterView from '../CenterView';
import {color, size} from '../../../src/theme';
import {ScrollView} from 'react-native-gesture-handler';

storiesOf('ImageButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
      <ScrollView horizontal>
        <Section>
          <ImageButton
            data={{
              value: 'Burger',
              image: 'https://i.imgur.com/TKPAMlK.png',
            }}
            selected="Burger"
            onPressButton={() => {}}
          />
        </Section>
        <Section>
          <ImageButton
            data={{
              value: 'Pizza',
              image: 'https://i.imgur.com/en5L3uU.png',
            }}
            selected=""
            onPressButton={() => {}}
          />
        </Section>
        <Section>
          <ImageButton
            data={{
              value: 'Taco',
              image: 'https://i.imgur.com/CZ8PKlz.pngg',
            }}
            selected=""
            onPressButton={() => {}}
          />
        </Section>
        <Section>
          <ImageButton
            data={{
              value: 'Asian',
              image: 'https://i.imgur.com/NMRx8EB.png',
            }}
            selected=""
            onPressButton={() => {}}
          />
        </Section>
        <Section>
          <ImageButton
            data={{
              value: 'Coffee',
              image: 'https://i.imgur.com/kQOKK4C.png',
            }}
            selected=""
            onPressButton={() => {}}
          />
        </Section>
      </ScrollView>
  ));
