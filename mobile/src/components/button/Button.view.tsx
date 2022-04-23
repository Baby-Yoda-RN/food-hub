import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.styles';
import {TButtonProps} from './Button.type';
import {Icon} from '../icon/Icon';
import {size} from '../../theme';

export const ButtonView: FC<TButtonProps> = ({
  title  = 'Button',
  isDisabled = false,
  press, 
  buttonStyle,
  titleStyle,
  leftIcon,
  rightIcon,
}) => {
  
  let buttonClickableStyle = isDisabled ? styles.buttonDisabled : styles.buttonEnabled;

  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle, buttonClickableStyle]}
      disabled={isDisabled}
      onPress={() => press?.()}>
      {leftIcon && <Icon name={leftIcon} width={size.lg} height={size.lg} />}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {rightIcon && <Icon name={rightIcon} width={size.lg} height={size.lg} />}
    </TouchableOpacity>
  );
};