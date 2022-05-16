import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, Alert} from 'react-native';
import {ReviewCard} from '../../../src/components/reviewCard/ReviewCard';
import CenterView from '../CenterView';
import {Container, Section} from '../../../src/components';

storiesOf('ReviewCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Variants', () => (
    <Container isScrollViewDisabled={false}>
      <Section>
        <ReviewCard
          review={{
            name: 'Catherine Kelley',
            date: '08/05/2021',
            profileImage:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
            reviewText:
              'Visited this adorable Italian restaurant on Christmas Eve. It was a very cozy and fun place which offered a good meal and drinks! I highly recommend it to anyone who wants a quiet and intimate dinner. The waiter, Christopher is extremely courteous abd a lot of fun! Please visit Truffle as soon a you can! Pauline from North Woodmere New York',
            reviewScore: 5,
          }}
          handleProfilePicture={() => Alert.alert('Profile Page')}
          handleRightIcon={() => Alert.alert('Options')}
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
    </Container>
  ));
