import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Header, Section, Container} from '../../../src/components';
import CenterView from '../CenterView';
import {styles} from './Header.style';
import {size} from '../../../src/theme';
import { Alert } from 'react-native';

storiesOf('Header', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Container>

      <Section style={styles.section}>
        <Header
          deliveryLocation="123 N. Main Street"
          leftIconName="Hamburger"
          iconHeight={size.rg}
          iconWidth={size.rg}
          rightIconLocation="https://i.imgur.com/imwXQ08.png"
          containerStyle={styles.header}
          leftPress={() => Alert.alert('Pressed Left Icon')}
          rightPress={() => Alert.alert('Pressed Right Icon')}
        />
      </Section>

      <Section style={styles.section}>
        <Header
          deliveryLocation="Chocolate Factory"
          leftIconName="ChevronDown"
          iconHeight={size.rg}
          iconWidth={size.rg}
          rightIconLocation="https://i.imgur.com/nkYQDHc.png"
          containerStyle={styles.header}
          leftPress={() => Alert.alert('Pressed Left Icon')}
          rightPress={() => Alert.alert('Pressed Right Icon')}
        />
      </Section>

      <Section style={styles.section}>
        <Header
          title="Title"
          leftIconName="ChevronLeft"
          iconHeight={size.rg}
          iconWidth={size.rg}
          containerStyle={styles.header}
          leftPress={() => Alert.alert('Pressed Left Icon')}
        />
      </Section>

      <Section style={styles.section}>
        <Header
          leftIconName="ChevronLeft"
          rightIconName="Bag"
          iconHeight={size.rg}
          iconWidth={size.rg}
          containerStyle={styles.header}
          leftPress={() => Alert.alert('Pressed Left Icon')}
          rightPress={() => Alert.alert('Pressed Right Icon')}
        />
      </Section>

      <Section style={styles.section}>
        <Header
          leftIconName="ChevronLeft"
          iconHeight={size.rg}
          iconWidth={size.rg}
          containerStyle={styles.header}
          leftPress={() => Alert.alert('Pressed Left Icon')}
        />
      </Section>

      <Section style={styles.section}>
        <Header
          title="Background Color"
          iconHeight={size.rg}
          iconWidth={size.rg}
          containerStyle={[styles.header, styles.background]}
        />
      </Section>

    </Container>
  ));
