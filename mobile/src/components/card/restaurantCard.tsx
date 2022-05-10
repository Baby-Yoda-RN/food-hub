import React, {FC} from 'react';
import {Card} from './card';
import {Text, View, ScrollView, Image, ViewStyle} from 'react-native';
import {styles} from './card.style';
import {color, size} from '../../theme';
import {TRestaurantCardProps} from './card.type';
import {RatingTag, Icon} from '../index';

export const RestaurantCard: FC<TRestaurantCardProps> = ({restaurant}) => {
  const {
    name,
    rating,
    usersVoted,
    favorite,
    freeDelivery,
    deliveryTime,
    items,
    imageName,
  } = restaurant;

  const favoriteBackgroundColor: ViewStyle = favorite
    ? {backgroundColor: color.primary}
    : {backgroundColor: color.transparent};

  return (
    <Card>
      <View>
        <Image
          style={styles.cardImage}
          source={{
            uri: imageName,
          }}
        />
      </View>
      <View style={styles.topRightTag}>
        <Icon
          name="Heart"
          width={size.rg}
          height={size.rg}
          containerStyle={[styles.favoriteTag, favoriteBackgroundColor]}
          fill={color.white}
        />
      </View>
      <View style={styles.bottomTags}>
        <RatingTag usersVoted={usersVoted} rating={rating} />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.detailsContainer}>
          <Icon
            name="Motorcycle"
            height={size.md}
            width={size.md}
            containerStyle={styles.iconContainer}
          />
          <Text style={styles.details}>{freeDelivery}</Text>
          <Icon
            name="Clock"
            height={size.md}
            width={size.md}
            containerStyle={styles.iconContainer}
          />
          <Text style={styles.details}>{`${deliveryTime} mins`}</Text>
        </View>
        <ScrollView
          nestedScrollEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tagsContainer}>
          {items?.map((item, key) => (
            <Text style={styles.itemTags} key={key}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    </Card>
  );
};
