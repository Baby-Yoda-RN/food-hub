import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Icon} from '../icon/Icon';
import {THeaderProps} from './Header.type'
import {styles} from './Header.style';

export const Header: FC<THeaderProps> = ({
    title,
    deliveryLocation,
    containerStyle,
    leftPress,
    rightPress,
    leftIconName,
    rightIconName,
    rightIconLocation,
    leftIconStyle,
    rightIconStyle,
    iconWidth,
    iconHeight,
  }) => {

  return (
    <SafeAreaView>
      <View style={[styles.container, containerStyle]}>
        {leftIconName && (
          <TouchableOpacity
            onPress={leftPress}
            style={[styles.leftComponentStyle]}>
            <Icon
              name={leftIconName}
              containerStyle={[styles.leftIcon, leftIconStyle]}
              width={iconWidth}
              height={iconHeight}
            />
          </TouchableOpacity>
        )}
        

        {title && (
          <Text style={styles.title}>{title}</Text>
        )}

        {deliveryLocation && (
            <View style={[styles.locationContainer]}>
              <View>
                <Text style={styles.deliverTo}>Deliver To
                  <Icon
                    name={'ChevronDown'}
                    width={10}
                    height={10} />
                </Text>
              </View>
              <Text style={styles.deliveryLocation}>{deliveryLocation}</Text>
            </View>
        )}

        {rightIconLocation && (
          <TouchableOpacity
            onPress={rightPress}
            style={[styles.rightComponentStyle]}>
            <Image style={[styles.image]} source={{uri: rightIconLocation}} />
          </TouchableOpacity>
        )}

        {rightIconName && (
          <TouchableOpacity
            onPress={leftPress}
            style={[styles.leftComponentStyle]}>
            <Icon
              name={rightIconName}
              containerStyle={[styles.rightIcon, rightIconStyle]}
              width={iconWidth}
              height={iconHeight}
            />
          </TouchableOpacity>
        )}

      </View>
    </SafeAreaView>
  );
};