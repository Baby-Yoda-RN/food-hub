import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/Icon';
import {styles} from './AddOn.style';
import {color, size} from 'theme';
import {TAddOn} from './AddOn.type';

export const AddOn: FC<TAddOn> = ({
  selected,
  pressAddOn,
  image,
  title,
  price,
  count,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.titleAddOn}>{title}</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.titleAddOn}>{`+$${(price * count).toFixed(
          2,
        )}`}</Text>
        <TouchableOpacity onPress={pressAddOn}>
          {selected ? (
            <Icon
              name={'BulletOrangeFilled'}
              width={size.lg}
              height={size.lg}
            />
          ) : (
            <Icon
              name={'BulletGreyHollow'}
              width={size.lg}
              height={size.lg}
              fill={color.white}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
