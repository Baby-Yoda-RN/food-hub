import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.styles';
import {TButtonProps} from './Button.type';
import {Icon} from '../icon/Icon';
import {color,size} from '../../theme';

export const Button: FC<TButtonProps> = ({
  title  = 'Button',
  isDisabled = false,
  onPress,
  containerStyle,
  titleStyle,
  buttonTheme = color.primary,
  leftIconName,
  rightIconName,
  leftIconStyle,
  rightIconStyle,
  iconSize,
  ...rest
}) => {
  
  const buttonClickableStyle = isDisabled ? styles.buttonDisabled : styles.buttonEnabled;


  return (
    
    <TouchableOpacity 
      onPress={onPress}
      style={[
        styles.container, 
        buttonClickableStyle,
        {
          backgroundColor: buttonTheme, 
        },
        containerStyle, 
      ]}
      disabled={isDisabled}
      {...rest}>
      {leftIconName && <Icon  name={leftIconName} containerStyle={[leftIconStyle]} width={iconSize} height={iconSize}/>}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {rightIconName && <Icon name={rightIconName} containerStyle={rightIconStyle} width={iconSize} height={iconSize}/>}
    </TouchableOpacity>
  );
};