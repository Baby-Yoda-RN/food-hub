import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.style';
import {ButtonProps} from './Button.type';

export const ButtonView: FC<ButtonProps> = ({
  title  = 'Button',
  isDisabled = false,
  press, 
  buttonStyle,
  titleStyle,
  rightIcon,
  leftIcon,
}) => {
  let buttonClickableStyle;
  isDisabled
    ? (buttonClickableStyle = styles.buttonDisabled)
    : (buttonClickableStyle = styles.buttonEnabled);

  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle, buttonClickableStyle]}
      disabled={isDisabled}
      onPress={() => press?.()}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};