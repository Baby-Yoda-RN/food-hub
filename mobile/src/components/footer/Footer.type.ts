import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type TFooter = {
  onPressSignUp?: () => void;
  onPressSignIn?: () => void;
  divider: string;
  dividerStyle?: StyleProp<ViewStyle>;
  dividerTextStyle?: StyleProp<TextStyle>;
  isEmailorPhone?: boolean;
};
