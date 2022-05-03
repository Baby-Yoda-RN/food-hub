import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type TFooter = {
  onPress: () => void;
  divider: string;
  dividerStyle?: StyleProp<ViewStyle>;
  dividerTextStyle?: StyleProp<TextStyle>;
  isEmailorPhone?: boolean;
};
