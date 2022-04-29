import {StyleProp, ViewStyle} from 'react-native';

export type TPinEntryProps = {
  keyBoardType: string;
  digitCount: int;
  containerStyle?: ViewStyle;
  onChangePinEntry: () => {};
};
