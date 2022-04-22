import type {ViewStyle, StyleProp} from 'react-native';

export type TTextInputProps = {
  leftIcon?: string;
  rightIcon?: string;
  isSensitive?: boolean;
  placeholder?: string;
  type: 'phone' | 'password' | 'email' | 'regular' | 'search';
};
