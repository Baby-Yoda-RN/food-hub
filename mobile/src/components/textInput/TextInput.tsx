import React, {
  FC,
  useState,
  useLayoutEffect,
  useRef,
  Dispatch,
  MutableRefObject,
} from 'react';
import {
  TextInput as NativeInput,
  Text,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import {size} from '../../theme';
import {phone_validator} from '../../utilities/phone_validator';
import {Button} from '../button/Button';
import {Icon} from '../icon/Icon';
import {style} from './TextInput.style';
import {TTextInputProps} from './TextInput.type';

export const TextInput: FC<TTextInputProps> = ({
  type,
  value,
  onChangeText,
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
  containerStyle,
  textStyle,
  onPress,
  props,
}) => {
  const [isActive, setIsActive] = useState(false);
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
  const handleChangeText = (onChangeText: Dispatch<string>, input: string) => {
    if (type === 'phone') {
      onChangeText(phone_validator(input));
      return;
    }
    onChangeText(input);
  };

  const whenPressIn = () => {
    setSecureTextEntry(false);
  };

  const whenPressOut = () => {
    setSecureTextEntry(true);
  };

  if (!onPress) {
    onPress = () => {
      textInputRef.current.focus();
    };
  }

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
        onChangeText={input => handleChangeText(onChangeText, input)}
        value={value}
        maxLength={max}
        ref={textInputRef}
        {...props}
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
            <Button title={rightButton} containerStyle={rightButtonStyle} />
          )}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
