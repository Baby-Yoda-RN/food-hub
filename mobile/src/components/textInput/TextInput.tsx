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
  const max = 30;
  const whenFocused = () => {
    setContainerStyle([...containerStyle, {borderColor: color.primary}]);
  };
  const whenBlurred = () => {
    setContainerStyle([...containerStyle, {borderColor: color.grayLow}]);
  };
  useEffect(() => {
    if (type === 'search') {
      setContainerStyle([...containerStyle, {justifyContent: 'flex-start'}]);
    } else if (type === 'phone') {
      setText('(+ )    -   -    ');
    }
  }, []);

  //TODO create to accept with Phone number and set Phone number Input
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
        onChangeText={e => setText(e)}
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
