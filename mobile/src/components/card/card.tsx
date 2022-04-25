import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './card.style';
import {TCardProps} from './card.type';

export const Card: FC<TCardProps> = ({
  image,
  title,
  containerStyle,
  renderDetails,
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
        {renderDetails()}
      </View>
    </View>
  );
};
