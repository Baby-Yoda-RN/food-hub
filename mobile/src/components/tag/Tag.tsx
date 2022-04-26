import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {size} from '../../theme';
import {Icon} from '../icon/Icon';
import {styles} from './Tag.style';
import {TTagProps} from './Tag.type';

export const Tag: FC<TTagProps> = ({
  rating = 4.5,
  price = 10.95,
  usersVoted = 30,
  isPrice,
  limit = 25,
}) => {
  const renderPrice = () => (
    <>
      <Text style={styles.dollarSign}>$</Text>
      <Text style={styles.priceText}>{price}</Text>
    </>
  );

  const renderRating = () => (
    <>
      <Text style={styles.ratingText}>{rating}</Text>
      <Icon name="Star" height={size.md} width={size.md} />
      {usersVoted >= limit ? (
        <Text style={styles.votesText}>{`(${limit}+)`}</Text>
      ) : (
        <Text style={styles.votesText}>{`(${usersVoted})`}</Text>
      )}
    </>
  );

  const render = () => {
    if (isPrice) {
      return renderPrice();
    } else {
      return renderRating();
    }
  };

  return <View style={styles.container}>{render()}</View>;
};
