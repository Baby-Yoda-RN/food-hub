import {StyleProp, ViewStyle} from 'react-native';

export type TPinEntryProps = {
  keyBoardType: string;
  digitCount: number;
  containerStyle?: ViewStyle;
  textInputStyle?: ViewStyle;
  onSelectTextInputStyle?: ViewStyle;
  onChangePinEntry: () => {};
};
