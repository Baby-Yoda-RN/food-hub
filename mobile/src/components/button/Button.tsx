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
  buttonStyle,
  titleStyle,
  buttonTheme = color.primary,
  buttonOutline = false,
  buttonOutlineColor = 'white',
  leftIconName,
  rightIconName,
  leftIconStyle,
  rightIconStyle,
  iconWidth,
  iconHeight,
  ...rest
}) => {
  
  let buttonClickableStyle = isDisabled ? styles.buttonDisabled : styles.buttonEnabled;
  let currentButtonOutline = buttonOutline ? 1 : 0;



  return (
    
    <TouchableOpacity 
      style={[
        styles.container, 
        buttonStyle, 
        buttonClickableStyle,
        {
          backgroundColor: buttonTheme, 
          borderWidth: currentButtonOutline,
          borderColor: buttonOutlineColor
        }
      ]}
      disabled={isDisabled}
      onPress={() => onPress?.()}
      {...rest}>
      {leftIconName && <Icon  name={leftIconName} containerStyle={[leftIconStyle]} width={iconWidth} height={iconHeight}/>}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {rightIconName && <Icon name={rightIconName} containerStyle={rightIconStyle} width={iconWidth} height={iconHeight}/>}
    </TouchableOpacity>
  );
};