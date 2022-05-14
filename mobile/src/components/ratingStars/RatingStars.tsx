import React, {useState, FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/Icon';
import {styles} from './RatingStars.styles';
import {size} from 'theme';
import {TRatingStarsProps} from './RatingStars.type';

export const RatingStars: FC<TRatingStarsProps> = ({userRating = 0}) => {
  const [currentRating, setCurrentRating] = useState(userRating);
  const ratingsArray: number[] = [1, 2, 3, 4, 5];
  let ratingDescription: string = '';

  switch (currentRating) {
    case 1:
      ratingDescription = 'Bad';
      break;
    case 2:
      ratingDescription = 'Poor';
      break;
    case 3:
      ratingDescription = 'Average';
      break;
    case 4:
      ratingDescription = 'Good';
      break;
    case 5:
      ratingDescription = 'Great';
      break;
    default:
      ratingDescription = 'Please Rate Us!';
  }

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{ratingDescription} </Text>
      </View>
      <View style={styles.container}>
        {ratingsArray.map((item, key) => {
          return (
            <TouchableOpacity key={item} onPress={() => setCurrentRating(item)}>
              <View>
                <Icon
                  name={item <= currentRating ? 'Star' : 'StarHollow'}
                  width={size.lg}
                  height={size.lg}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};
