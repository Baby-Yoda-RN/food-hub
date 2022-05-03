import {StyleProp, ViewStyle} from 'react-native';

export type TDropdown = {
  data: Array<TDropdownOject>;
  containerStyle?: StyleProp<ViewStyle>;
};

export type TDropdownOject = {
  label: string;
  value: string;
};
