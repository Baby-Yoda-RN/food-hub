import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import {styles} from './ListItem.styles';
import {Icon} from '../icon/Icon';
import {TListItemProps} from './ListItem.type';

export const ListItem: FC<TListItemProps> = ({
  title,
  subTitle,
  image,
  price,
  itemQuantity,
  iconSize,
  onPressCross,
  onPressMinus,
  onPressPlus,
  ...rest
}) => {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>

        <View>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>

      <View>
        <View style={styles.topRightIconContainer}>
          <TouchableOpacity onPress={pressCross}>
            <Icon name={'Cross'} width={iconSize} height={iconSize} />
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={pressMinus}>
            <Icon name={'Minus'} width={iconSize} height={iconSize} />
          </TouchableOpacity>
          <View>
            <Text style={styles.itemQuantity}>{itemQuantity}</Text>
          </View>
          <TouchableOpacity onPress={pressPlus}>
            <Icon name={'Plus'} width={iconSize} height={iconSize} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
