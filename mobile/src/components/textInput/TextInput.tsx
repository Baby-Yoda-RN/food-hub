import React, {FC, useState, useEffect} from 'react';
import {
  TextInput as NativeInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../theme';
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
  const [isActive, setIsActive] = useState(Boolean);
  const [text, setText] = useState('');
  let max = type === 'phone' ? 17 : 30;
  let currentContainerStyle = isActive
    ? style.containerFocus
    : style.containerBlur;

  if (type === 'phone' || type === 'search') {
    const flexEnd = {justifyContent: 'flex-start'};
  }
  const whenFocused = () => {
    setIsActive(true);
  };
  const whenBlurred = () => {
    setIsActive(false);
  };
  const onTextChange = (text: string) => {
    if (type === 'phone') {
      const cleaned = ('' + text).replace(/\D/g, '');
      const match = cleaned.match(/^(\d)?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        var intlCode = match[1] ? `+${match[1]} ` : '';
        setText(`${intlCode} (${match[2]})${match[3]}-${match[4]}`);
        return;
      }
    }
    setText(text);
  };

  useEffect(() => {});
  return (
    <TouchableOpacity style={currentContainerStyle} {...rest}>
      {leftIcon && (
        <TouchableOpacity>
          <Text>LeftIcon-TODO</Text>
        </TouchableOpacity>
      )}
      <NativeInput
        style={style.textInput}
        placeholder={placeholder}
        secureTextEntry={isSensitive}
        onFocus={whenFocused}
        onBlur={whenBlurred}
        onChangeText={e => onTextChange(e)}
        value={text}
        maxLength={max}
      />

      {rightIcon && (
        <TouchableOpacity>
          <Text>RightIcon-TODO</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
