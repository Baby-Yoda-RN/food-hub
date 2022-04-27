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
import {styles} from './Header.style';
​
interface IProps {
  title?: string;
  containerStyle?: ViewStyle;
  leftPress?: () => void;
  rightPress?: () => void;
  leftIconName?: string;
  rightIconLocation?: string;
  leftIconStyle?: ViewStyle;
  rightIconStyle?: ViewStyle;
  iconWidth?: number;
  iconHeight?: number;
}
​
export const Header: FC<IProps> = props => {
  const {
    title,
    containerStyle,
    leftPress,
    rightPress,
    leftIconName,
    rightIconLocation,
    leftIconStyle,
    iconWidth,
    iconHeight,
  } = props;
​
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
​        <View style={[styles.textContainer, containerStyle]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
​
        {rightIconLocation && (
          <TouchableOpacity
            onPress={rightPress}
            style={[styles.rightComponentStyle]}>
            <Image style={[styles.image]} source={{uri: rightIconLocation}} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};