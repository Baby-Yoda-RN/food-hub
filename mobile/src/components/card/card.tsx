import React, {FC} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {size} from '../../theme';
import {Icon} from '../icon/Icon';
import {styles} from './card.style';
import {TCardProps} from './card.type';

export const Card: FC<TCardProps> = ({
  image,
  title,
  rating,
  usersVoted,
  favorite,
  freeDelivery,
  deliveryTime,
  restaurant,
  foodItem,
  subtitle,
  tags,
  price,
  isRestaurant,
  containerStyle,
}) => {
  // Rating Component and Favorite Component needed

  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <Image
          style={styles.cardImage}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{title}</Text>
        {isRestaurant ? (
          <View>
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
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.tagsContainer}>
              {tags?.map((item, key) => (
                <Text style={styles.itemTags} key={key}>
                  {item}
                </Text>
              ))}
            </ScrollView>
          </View>
        ) : (
          <Text style={styles.details}>{subtitle}</Text>
        )}
      </View>
    </View>
  );
};
