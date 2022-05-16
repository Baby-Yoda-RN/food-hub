import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import CenterView from '../CenterView';
import {Container, Section, ListItem} from '../../../src/components';
import {Alert} from 'react-native';
import {styles} from './listItem.style';

storiesOf('ListItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Container style={styles.container}>
      <Section>
        <ListItem
          title="Pizza"
          subTitle={'Pinnaple, Pepperoni'}
          image={'https://i.imgur.com/vRxiT35.jpg'}
          price={19.99}
          itemQuantity={1}
          iconSize={25}
          pressCross={() => Alert.alert('Cross Pressed')}
          pressPlus={() => Alert.alert('Plus Pressed')}
          pressMinus={() => Alert.alert('Minus Pressed')}
        />
      </Section>

      <Section>
        <ListItem
          title={'Salad'}
          subTitle={'Lettuce, Anchovies, Ranch'}
          image={'https://i.imgur.com/Ux2NUdg.jpg'}
          price={7.99}
          itemQuantity={1}
          iconSize={25}
          pressCross={() => Alert.alert('Cross Pressed')}
          pressPlus={() => Alert.alert('Plus Pressed')}
          pressMinus={() => Alert.alert('Minus Pressed')}
        />
      </Section>
      <Section>
        <ListItem
          title={'Salad'}
          subTitle={'Lettuce, Anchovies, Ranch'}
          image={'https://i.imgur.com/Ux2NUdg.jpg'}
          price={7.99}
          itemQuantity={1}
          iconSize={25}
          pressCross={() => Alert.alert('Cross Pressed')}
          pressPlus={() => Alert.alert('Plus Pressed')}
          pressMinus={() => Alert.alert('Minus Pressed')}
        />
      </Section>
      <Section>
        <ListItem
          title="Pizza"
          subTitle={'Pinnaple, Pepperoni'}
          image={'https://i.imgur.com/vRxiT35.jpg'}
          price={19.99}
          itemQuantity={1}
          iconSize={25}
          pressCross={() => Alert.alert('Cross Pressed')}
          pressPlus={() => Alert.alert('Plus Pressed')}
          pressMinus={() => Alert.alert('Minus Pressed')}
        />
      </Section>
      <Section>
        <ListItem
          title={'Salad'}
          subTitle={'Lettuce, Anchovies, Ranch'}
          image={'https://i.imgur.com/Ux2NUdg.jpg'}
          price={7.99}
          itemQuantity={1}
          iconSize={25}
          pressCross={() => Alert.alert('Cross Pressed')}
          pressPlus={() => Alert.alert('Plus Pressed')}
          pressMinus={() => Alert.alert('Minus Pressed')}
        />
      </Section>
      <Section>
        <ListItem
          title="Pizza"
          subTitle={'Pinnaple, Pepperoni'}
          image={'https://i.imgur.com/vRxiT35.jpg'}
          price={19.99}
          itemQuantity={1}
          iconSize={25}
          pressCross={() => Alert.alert('Cross Pressed')}
          pressPlus={() => Alert.alert('Plus Pressed')}
          pressMinus={() => Alert.alert('Minus Pressed')}
        />
      </Section>
      <Section>
        <ListItem
          title={'Salad'}
          subTitle={'Lettuce, Anchovies, Ranch'}
          image={'https://i.imgur.com/Ux2NUdg.jpg'}
          price={7.99}
          itemQuantity={1}
          iconSize={25}
          pressCross={() => Alert.alert('Cross Pressed')}
          pressPlus={() => Alert.alert('Plus Pressed')}
          pressMinus={() => Alert.alert('Minus Pressed')}
        />
      </Section>
      <Section>
        <ListItem
          title="Pizza"
          subTitle={'Pinnaple, Pepperoni'}
          image={'https://i.imgur.com/vRxiT35.jpg'}
          price={19.99}
          itemQuantity={1}
          iconSize={25}
          pressCross={() => Alert.alert('Cross Pressed')}
          pressPlus={() => Alert.alert('Plus Pressed')}
          pressMinus={() => Alert.alert('Minus Pressed')}
        />
      </Section>
    </Container>
  ));
