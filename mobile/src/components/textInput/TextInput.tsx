import React, {FC, useState, useLayoutEffect, useRef} from 'react';
import {
  TextInput as NativeInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {size} from '../../theme';
import {phone_validator} from '../../utilities/phone_validator';
import {Button} from '../button/Button';
import {Icon} from '../icon/Icon';
import {style} from './TextInput.style';
import {TTextInputProps} from './TextInput.type';

export const TextInput: FC<TTextInputProps> = ({
  leftIcon,
  leftIconStyle,
  leftIconSize,
  rightIcon,
  rightIconStyle,
  rightIconSize,
  rightButton,
  rightButtonStyle,
  isSensitive = false,
  placeholder = 'Enter Text',
  type,
  containerStyle,
  textStyle,
  text,
  setText,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  //const [text, setText] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const textInputRef = useRef(null);
  let max = type === 'phone' ? 17 : 300;
  let currentContainerStyle = isActive
    ? style.containerFocus
    : style.containerBlur;

  const leftElement = leftIcon;
  const rightElement = rightIcon || rightButton;

  const whenFocused = () => {
    setIsActive(true);
  };
  const whenBlurred = () => {
    setIsActive(false);
  };
  const onTextChange = (input: string) => {
    if (type === 'phone') {
      setText(phone_validator(input));
      return;
    }
    setText(input);
  };
  const whenPressIn = () => {
    setSecureTextEntry(false);
  };
  const whenPressOut = () => {
    setSecureTextEntry(true);
  };
  const onPress = () => {
    textInputRef.current.focus();
  };

  switch (type) {
    case 'phone':
    case 'search':
      currentContainerStyle = {
        ...currentContainerStyle,
        justifyContent: 'flex-start',
      };
      break;
    default:
      break;
  }

  useLayoutEffect(() => {
    if (type === 'password') {
      setSecureTextEntry(true);
    }
  }, []);

  return (
    <TouchableOpacity
      style={[currentContainerStyle, containerStyle]}
      {...rest}
      onPress={onPress}>
      {!!leftElement && (
        <TouchableOpacity style={leftIconStyle}>
          <Icon
            name={leftIcon}
            height={leftIconSize || size.lg}
            width={leftIconSize || size.lg}
          />
        </TouchableOpacity>
      )}
      <NativeInput
        style={[style.textInput, textStyle]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onFocus={whenFocused}
        onBlur={whenBlurred}
        onChangeText={onTextChange}
        value={text}
        maxLength={max}
        ref={textInputRef}
      />

      {!!rightElement && (
        <TouchableOpacity
          style={rightIconStyle}
          onPressIn={whenPressIn}
          onPressOut={whenPressOut}>
          {!!rightIcon && (
            <Icon
              name={rightIcon}
              height={rightIconSize || size.rg}
              width={rightIconSize || size.rg}
            />
          )}
          {!!rightButton && (
            <Button
              title={rightButton}
              containerStyle={rightButtonStyle}
              {...rest}
            />
          )}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
