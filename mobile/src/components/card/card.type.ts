import {StyleProp, ViewStyle} from 'react-native';

export type TCardProps = {
  image?: string;
  title?: string;
  renderDetails: () => {};
  containerStyle?: StyleProp<ViewStyle>;
};
