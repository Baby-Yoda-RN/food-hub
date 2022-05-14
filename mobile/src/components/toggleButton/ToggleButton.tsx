import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TToggleButtonProps} from './ToggleButton.type';
import {styles} from './ToggleButton.styles';
import {color} from 'theme';

export const ToggleButton: FC<TToggleButtonProps> = ({
  primaryText = 'Left Toggle',
  secondaryText = 'Right Toggle',
  option,
  setOption,
  containerStyle,
  buttonTheme = color.primary,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => setOption(true)}
        style={[styles.button, containerStyle, option && styles.buttonEnabled]}
        activeOpacity={1}
        {...rest}>
        <Text
          style={{
            color: option ? color.white : buttonTheme,
          }}>
          {primaryText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setOption(false)}
        style={[styles.button, containerStyle, !option && styles.buttonEnabled]}
        activeOpacity={1}
        {...rest}>
        <Text
          style={{
            color: !option ? color.white : buttonTheme,
          }}>
          {secondaryText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
