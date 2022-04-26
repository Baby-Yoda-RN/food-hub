import React, {FC, useState, useLayoutEffect, useRef} from 'react';
import {
  TextInput as NativeInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {size} from '../../theme';
import {phone_validator} from '../../utilities/phone_validator';
import {Icon} from '../icon/Icon';
import {style} from './TextInput.style';
import {TTextInputProps} from './TextInput.type';

export const TextInput: FC<TTextInputProps> = ({
  leftIcon,
  rightIcon,
  isSensitive = false,
  placeholder = 'Enter Text',
  type,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const textInputRef = useRef(null);
  let max = type === 'phone' ? 17 : 30;
  let currentContainerStyle = isActive
    ? style.containerFocus
    : style.containerBlur;

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
    <TouchableOpacity style={currentContainerStyle} {...rest} onPress={onPress}>
      {!!leftIcon && (
        <TouchableOpacity>
          <Icon name={leftIcon} height={size.rg} width={size.rg} />
        </TouchableOpacity>
      )}
      <NativeInput
        style={style.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onFocus={whenFocused}
        onBlur={whenBlurred}
        onChangeText={onTextChange}
        value={text}
        maxLength={max}
        ref={textInputRef}
      />

      {!!rightIcon && (
        <TouchableOpacity onPressIn={whenPressIn} onPressOut={whenPressOut}>
          <Icon name={rightIcon} height={size.m} width={size.m} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
