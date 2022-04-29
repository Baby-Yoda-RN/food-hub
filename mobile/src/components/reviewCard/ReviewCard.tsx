import React, {FC} from 'react';
import {View, Image, Text} from 'react-native';
import {Badge} from '../badge/Badge';
import {Card} from '../card/card';
import {styles} from './ReviewCard.style';
import {TReviewCardProps} from './ReviewCard.type';

export const ReviewCard: FC<TReviewCardProps> = ({
  review,
  handleProfilePicture,
  handleRightIcon,
}) => {
  const render = () => {
    return (
      <View>
        <View style={styles.userInformationContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={{uri: review.profileImage}} style={styles.image} />
            <View style={styles.badgeContainer}>
              <Badge containerStyle={styles.badge} value={review.reviewScore} />
            </View>
          </View>
          <View style={styles.userDetailsContainer}>
            <Text style={styles.nameText}>{review.name}</Text>
            <Text style={styles.dateText}>{review.date}</Text>
          </View>
        </View>
        <Text style={styles.reviewText}>{review.reviewText}</Text>
      </View>
    );
  };
  return <Card renderDetails={render} />;
};
