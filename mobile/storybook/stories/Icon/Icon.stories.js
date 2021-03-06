import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Container, Icon, Section} from '../../../src/components';
import CenterView from '../CenterView';
import {color, size} from '../../../src/theme';
import {styles} from './Icon.style';

storiesOf('Icon', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Container>
      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="Bag"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Bell"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Brand"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Bullet"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="BulletGreyHollow"
            fill={color.white}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="BulletOrangeFilled"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Camera"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Category"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="CheckMark"
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="ChevronDown"
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="ChevronLeft"
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="ChevronRight"
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="Clock"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Colon"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Compass"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Cross"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="Eye"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Facebook"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="FlagUSA"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="FoodHub"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="Gear"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Google"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Hamburger"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Heart"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="Home"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="List"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Logout"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Magnify"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="Mail"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Minus"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Motorcycle"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Pin"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="PizzaHut"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Plus"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Profile"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="QuestionMark"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

      <Section containerStyle={styles.row}>
        <Section>
          <Icon
            name="Slide"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Star"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="StarHollow"
            fill={color.white}
            height={size.xl}
            width={size.xl}
          />
        </Section>
        <Section>
          <Icon
            name="Wallet"
            fill={color.primary}
            height={size.xl}
            width={size.xl}
          />
        </Section>
      </Section>

    </Container>
  ))
  .add('Disabled', () => (
    <Section>
      <Icon
        name="Bag"
        fill={color.grayDisabled}
        height={size.xl}
        width={size.xl}
      />
    </Section>
  ));
