import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Container, Section, ImageButton} from '../../../src/components';
import {FoodCard} from '../../../src/components/card/foodCard';
import {OrderCard} from '../../../src/components/orderCard/OrderCard';
import {ReviewCard} from '../../../src/components/reviewCard/ReviewCard';
import {styles} from './container.style';

export const ContainerComponent = () => {
  const [text, onChangeText] = useState();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container
      isLoading={isLoading}
      isScrollViewDisabled={false}
      style={styles.container}>
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
        <OrderCard
          leftButtonTitle="Rate"
          rightButtonTitle="Re-Order"
          order={{
            restaurantName: 'Starbucks',
            date: '28 Jan, 10:30',
            status: 'Food on the way',
            items: 4,
            delivered: false,
            restaurantImage:
              'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
            estimatedTime: '25 min',
            total: '16.60',
          }}
        />
      </Section>
      <Section>
        <ReviewCard
          review={{
            name: 'Diana Quinn',
            date: '12/10/2019',
            profileImage:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPsHyxR_Y76c6PdW01ru33Nu4uvoHKrGeGW-lab4SxBRIqaka6qyvrojRZxv85WJmgjY&usqp=CAU',
            reviewText:
              'Great food & excellent service. The waiters are friendly, the service is great, The food is hot and fresh. I have had breakfast, lunch & dinners here. If your in a rush they will get you out fast and if you want to just sit that fine too.',
            reviewScore: 5,
          }}
          handleProfilePicture={() => Alert.alert('Profile Page')}
          handleRightIcon={() => Alert.alert('Options')}
        />
      </Section>
      <Section>
        <ReviewCard
          review={{
            name: 'Brian Glass',
            date: '11/17/2018',
            profileImage:
              'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=',
            reviewText:
              "The food is good, the price is reasonable and some staff are friendly, but the host is very bitter, she never apologized when i got trap inside the bathroom for more that half hour because the door knob doesn't work. the owners should hire for that position people with great attitude, with happy face, friendly and hamble.",
            reviewScore: 3,
          }}
          handleProfilePicture={() => Alert.alert('Profile Page')}
          handleRightIcon={() => Alert.alert('Options')}
        />
      </Section>
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
    </Container>
  );
};
