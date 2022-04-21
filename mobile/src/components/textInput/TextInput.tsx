import React, {useState} from 'react';
import {
  TextInput as NativeInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../theme';
import {style} from './TextInput.style';

type TextInputProps = {
  isSensitive?: boolean;
  isFocused?: boolean;
};

export const TextInput = ({
  isSensitive = false,
  isFocused = false,
}: TextInputProps) => {
  const [containerStyle, setContainerStyle] = useState([style.container]);
  const [focus, set] = useState();
  const [blur, setBlur] = useState();

  return (
    <TouchableOpacity style={containerStyle}>
      <Text>LeftIcon</Text>
      <NativeInput
        style={style.textInput}
        placeholder="Hello"
        secureTextEntry={isSensitive}
        onFocus={() =>
          setContainerStyle([style.container, {borderColor: color.primary}])
        }
        onBlur={() =>
          setContainerStyle([style.container, {borderColor: color.grayLow}])
        }
      />
      <Text>RightIcon</Text>
    </TouchableOpacity>
  );
};
