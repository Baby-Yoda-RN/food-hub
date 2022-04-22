import React, {FC, useState} from 'react';
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
  ...rest
}) => {
  const [containerStyle, setContainerStyle] = useState([style.container]);
  const [text, setText] = useState('');
  const max = 30;
  //TODO create to accept with Phone number and set Phone number Input
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
        onFocus={() =>
          setContainerStyle([style.container, {borderColor: color.primary}])
        }
        onBlur={() =>
          setContainerStyle([style.container, {borderColor: color.grayLow}])
        }
        onChangeText={e => setText(e)}
        value={text.length < max - 3 ? text : text + '...'}
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
