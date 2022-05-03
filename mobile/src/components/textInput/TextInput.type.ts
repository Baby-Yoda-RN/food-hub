import {StyleProp, View, ViewStyle} from 'react-native';

export type TTextInputProps = {
  type: 'phone' | 'password' | 'email' | 'regular' | 'search' | 'textButton';
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
};
