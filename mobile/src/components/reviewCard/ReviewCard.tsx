import React, {FC} from 'react';
import {View, Image, Text} from 'react-native';
import {size} from '../../theme';
import {Badge} from '../badge/Badge';
import {Card} from '../card/card';
import {Icon} from '../icon/Icon';
import {styles} from './ReviewCard.style';
import {TReviewCardProps} from './ReviewCard.type';

export const ReviewCard: FC<TReviewCardProps> = ({
  review,
  handleProfilePicture,
  handleRightIcon,
}) => {
  const render = () => {
    return (
      <>
        <View style={styles.reviewHeaderContainer}>
          <View style={styles.userInformationContainer}>
            <View style={styles.profileImageContainer}>
              <Image source={{uri: review.profileImage}} style={styles.image} />
              <View style={styles.badgeContainer}>
                <Badge
                  containerStyle={styles.badge}
                  value={review.reviewScore}
                />
              </View>
            </View>
            <View style={styles.userDetailsContainer}>
              <Text style={styles.nameText}>{review.name}</Text>
              <Text style={styles.dateText}>{review.date}</Text>
            </View>
          </View>
          <View style={styles.colonIcon}>
            <Icon name="Colon" height={size.rg} width={size.rg} />
          </View>
        </View>
        <Text style={styles.reviewText}>{review.reviewText}</Text>
      </>
    );
  };
  return <Card renderDetails={render} />;
};
