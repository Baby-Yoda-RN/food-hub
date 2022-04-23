import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.styles';
import {TButtonProps} from './Button.type';

export const ButtonView: FC<TButtonProps> = ({
  title  = 'Button',
  isDisabled = false,
  press, 
  buttonStyle,
  titleStyle,
}) => {
  
  let buttonClickableStyle = isDisabled ? styles.buttonDisabled : styles.buttonEnabled;

  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle, buttonClickableStyle]}
      disabled={isDisabled}
      onPress={() => press?.()}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};