import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {FoodCard} from '../../../src/components/card/foodCard';
import {RestaurantCard} from '../../../src/components/card/restaurantCard';
import CenterView from '../CenterView';
import {styles} from './FoodCard.style';
import {Container, Section} from '../../../src/components';

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('FoodCard', () => (
    <Container>
      <Section style={styles.container}>
        <FoodCard
          foodItem={{
            name: 'pineapple2',
            description: 'pineapple2 desc',
            rating: 2,
            usersVoted: 2,
            price: 2,
            favorite: true,
            imageName:
              'https://rustyspizza.com/images/default-source/default-album/rspechero.jpg?sfvrsn=79bcf8e0_2',
          }}
        />
      </Section>
    </Container>
  ))
  .add('RestaurantCard', () => (
    <Container isScrollViewDisabled={true}>
      <RestaurantCard
        restaurant={{
          name: "McDonald's",
          rating: 4,
          usersVoted: 25,
          favorite: true,
          freeDelivery: 'Free Delivery',
          deliveryTime: 10,
          items: ['Burger', 'Chicken', 'Fast Food', 'Breakfast', 'American'],
          imageName:
            'https://www.tasteofhome.com/wp-content/uploads/2021/03/mcdonalds-1200x630-GettyImages-1285446341.jpg',
        }}
      />

      <RestaurantCard
        restaurant={{
          name: 'Vegan Pizza',
          description: 'Vegan Pizza',
          rating: 5,
          usersVoted: 100,
          price: 5.5,
          favorite: false,
          imageName:
            'https://foodish-api.herokuapp.com/images/pizza/pizza29.jpg',
        }}
      />
    </Container>
  ));
