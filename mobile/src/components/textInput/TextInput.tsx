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
  const [containerStyle, setContainerStyle] = useState([style.container]);
  const [text, setText] = useState('');
  let max = type === 'phone' ? 17 : 30;
  const whenFocused = () => {
    setContainerStyle([...containerStyle, {borderColor: color.primary}]);
  };
  const whenBlurred = () => {
    setContainerStyle([...containerStyle, {borderColor: color.grayLow}]);
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
  useEffect(() => {
    if (type === 'search') {
      setContainerStyle([...containerStyle, {justifyContent: 'flex-start'}]);
    } else if (type === 'phone') {
      setContainerStyle([...containerStyle, {justifyContent: 'flex-start'}]);
    }
  }, []);

  useEffect(() => {});
  return (
    <TouchableOpacity style={containerStyle} {...rest}>
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
