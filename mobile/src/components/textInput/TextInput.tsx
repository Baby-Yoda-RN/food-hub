import React, {useState} from 'react';
import {
  TextInput as NativeInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../theme';
import {style} from './TextInput.style';

export const TextInput = ({isSensitive = false, isFocused = false}) => {
  const [containerStyle, setContainerStyle] = useState([style.container]);
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() =>
        setContainerStyle([style.container, {borderColor: color.primary}])
      }>
      <Text>LeftIcon</Text>
      <NativeInput
        style={style.textInput}
        placeholder="Hello"
        autoFocus={false}
        secureTextEntry={isSensitive}
      />
      <Text>RightIcon</Text>
    </TouchableOpacity>
  );
};
