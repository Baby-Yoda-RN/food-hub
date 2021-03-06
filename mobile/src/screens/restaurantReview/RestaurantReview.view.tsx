import React, {FC, useState} from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import {TextInput, Button, Container, Header} from '../../components';
import {RatingStars} from '../../components/ratingStars/RatingStars';
import {size} from '../../theme';
import {styles} from './RestaurantReview.style';
import {TRestaurantReviewView} from './RestaurantReview.type';

export const RestaurantReviewScreenView: FC<TRestaurantReviewView> = ({
  restaurant = 'Pizza Hut',
  leftIconPress,
  submit,
}) => {
  const [review, setReview] = useState();
  return (
    <Container
      header={
        <Header
          leftIconName="ChevronLeft"
          iconHeight={size.rg}
          iconWidth={size.rg}
          leftPress={leftIconPress}
          containerStyle={styles.header}
        />
      }>
      <SafeAreaView>
        <View style={styles.containerTop}>
          <Image
            source={require('../../assets/images/pizza_hut_logo.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.largeText}>
          How was your last order from {restaurant}?
        </Text>
        <RatingStars />
        <TextInput
          value={review}
          onChangeText={() => setReview}
          containerStyle={styles.review}
          multiline={true}
        />
        <Button
          title="SUBMIT"
          containerStyle={styles.buttonContainer}
          onPress={submit}
        />
      </SafeAreaView>
    </Container>
  );
};
