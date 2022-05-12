import React, {FC} from 'react';
import {Text} from 'react-native';
import {size} from '../../theme';
import {Icon} from '../icon/Icon';
import {Tag} from './Tag';
import {styles} from './Tag.style';

type TRatingTagProps = {
  rating: number;
  usersVoted: number;
  limit?: number;
};

export const RatingTag: FC<TRatingTagProps> = ({
  limit = 25,
  rating,
  usersVoted,
}) => {
  const render = () => (
    <>
      <Text style={styles.ratingText}>{rating?.toFixed(1)}</Text>
      <Icon
        name="Star"
        height={size.md}
        width={size.md}
        containerStyle={styles.iconContainer}
      />
      {usersVoted >= limit ? (
        <Text style={styles.votesText}>{`(${limit}+)`}</Text>
      ) : (
        <Text style={styles.votesText}>{`(${usersVoted})`}</Text>
      )}
    </>
  );

  return <Tag renderTag={render} />;
};
