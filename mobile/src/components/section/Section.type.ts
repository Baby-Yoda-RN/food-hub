import {StyleProp, ViewStyle} from 'react-native';
import {size} from 'theme';

export type TSection = {
  containerStyle?: StyleProp<ViewStyle>;
  marginTop?: keyof typeof size;
  marginBottom?: keyof typeof size;
  marginHorizontal?: keyof typeof size;
};
