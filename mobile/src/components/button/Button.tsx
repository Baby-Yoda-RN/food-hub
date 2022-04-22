import React, {FC} from 'react';
import {ButtonView} from './Button.view';
import {ButtonProps} from './Button.type';

export const Button: FC<ButtonProps> = ({
  title,
  isDisabled,
  onPress,
  buttonStyle,
  titleStyle,
  rightIcon,
  leftIcon,
}) => {
  return (
    <ButtonView
      title={title}
      press={onPress}
      isDisabled={isDisabled}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      rightIcon = {rightIcon}
      leftIcon = {leftIcon}
    />
  );
};