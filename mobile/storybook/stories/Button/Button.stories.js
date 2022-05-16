import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Button, Container, Section} from '../../../src/components';
import CenterView from '../CenterView';
import {styles} from './Button.style';
import {size, color} from '../../../src/theme';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Container containerStyle={styles.container}>
      <Section style={styles.defaultContainer}>
        <Button title="Default" containerStyle={styles.default} />
        <Button
          title="Default Light"
          titleStyle={styles.lightText}
          containerStyle={styles.light}
        />
      </Section>
      <Section style={styles.logoContainer}>
        <Button
          containerStyle={styles.logo}
          titleStyle={styles.logoText}
          title="Google"
          leftIconName="Google"
          iconSize={size.lg}
        />
        <Button
          containerStyle={styles.logo}
          titleStyle={styles.logoText}
          title="Facebook"
          leftIconName="Facebook"
          iconSize={size.lg}
        />
      </Section>
      <Section style={styles.logoutContainer}>
        <Button
          containerStyle={styles.logoutLogo}
          titleStyle={styles.logoutText}
          title="Logout"
          leftIconName="Logout"
          leftIconStyle={styles.logoutContainer}
          iconSize={size.rg}
        />
      </Section>
    </Container>
  ));
