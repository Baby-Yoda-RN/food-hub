import {Dispatch} from 'react';
import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export type TTextInputProps = {
  type: 'phone' | 'password' | 'email' | 'regular' | 'search' | 'textButton';
  value: string;
  onChangeText: Dispatch<string>;
  leftIcon?: string;
  leftIconStyle?: StyleProp<ViewStyle>;
  leftIconSize?: number;
  rightIcon?: string;
  rightIconStyle?: StyleProp<ViewStyle>;
  rightIconSize?: number;
  rightButton?: string;
  rightButtonStyle?: StyleProp<ViewStyle>;
  isSensitive?: boolean;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  props?: TextInputProps;
};
