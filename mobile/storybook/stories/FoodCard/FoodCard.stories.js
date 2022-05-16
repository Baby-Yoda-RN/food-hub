import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {FoodCard} from '../../../src/components/card/foodCard';
import {RestaurantCard} from '../../../src/components/card/restaurantCard';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('FoodCard', () => (
    <Container isScrollViewDisabled={false}>
      <Section>
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
      <Section>
        <FoodCard
          foodItem={{
            name: 'Pepperoni Pizza',
            description: 'Two layers of pepperoni sandwiched between provolone',
            rating: 1,
            usersVoted: 16,
            price: 11.49,
            favorite: true,
            imageName: 'https://i.imgur.com/rcYxMyJ.jpeg',
          }}
        />
      </Section>
      <Section>
        <FoodCard
          foodItem={{
            name: 'Supreme Pizza',
            description:
              'Italian sausage, fresh green peppers, fresh mushrooms, fresh onions',
            rating: 4,
            usersVoted: 38,
            price: 14.48,
            favorite: true,
            imageName: 'https://i.imgur.com/9Sd1QRO.jpeg',
          }}
        />
      </Section>
      <Section>
        <FoodCard
          foodItem={{
            name: 'Veggie Pizza',
            description:
              'Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives',
            rating: 3,
            usersVoted: 9,
            price: 12.99,
            favorite: true,
            imageName: 'https://i.imgur.com/NqMr2mT.jpeg',
          }}
        />
      </Section>
      <Section>
        <FoodCard
          foodItem={{
            name: 'Chicken Bacon Ranch Pizza',
            description: 'Grilled chicken breast, ranch, smoked bacon',
            rating: 3,
            usersVoted: 14,
            price: 10.99,
            favorite: true,
            imageName: 'https://i.imgur.com/0Ijt9vt.jpeg',
          }}
        />
      </Section>
    </Container>
  ))
  .add('RestaurantCard', () => (
    <Container>
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
