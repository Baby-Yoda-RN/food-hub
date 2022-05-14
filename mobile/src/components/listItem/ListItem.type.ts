import {GestureResponderEvent} from 'react-native';

export type TListItemProps = {
  title?: string;
  subTitle?: string;
  image?: string;
  price?: number;
  itemQuantity?: number;
  iconSize?: number;
  pressCross?: (event: GestureResponderEvent) => void;
  pressMinus?: (event: GestureResponderEvent) => void;
  pressPlus?: (event: GestureResponderEvent) => void;
};
