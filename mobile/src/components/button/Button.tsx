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
  buttonSize = 'regular',
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

  let currentButtonHeight: number = size.rg, currentButtonWidth: number = size.rg;
  switch(buttonSize){
    case 'extra small':
      currentButtonHeight = 38;
      currentButtonWidth = 38;
      break;
    case 'small': 
      currentButtonHeight = 32;
      currentButtonWidth = 55;
      break;
    case 'regular': 
      currentButtonHeight = 54;
      currentButtonWidth = 140;
      break;
    case 'large': 
      currentButtonHeight = 60;
      currentButtonWidth = 248;
      break;
    case 'extra large': 
      currentButtonHeight = 54;
      currentButtonWidth = 315;
      break;
  }
  
  

  return (
    
    <TouchableOpacity 
      style={[
        styles.container, 
        buttonStyle, 
        buttonClickableStyle,
        {
          backgroundColor: buttonTheme, 
          width: currentButtonWidth, 
          height: currentButtonHeight,
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