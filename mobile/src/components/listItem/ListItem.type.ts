import { GestureResponderEvent, ImageSourcePropType } from "react-native";

export type TListItemProps = {
    title?: string;
    subTitle?: string;
    image?: string;
    price?: number;
    itemQuantity?: number;
    iconSize?: number;
    onPressCross?: (event: GestureResponderEvent) => void;
    onPressMinus?: (event: GestureResponderEvent) => void;
    onPressPlus?: (event: GestureResponderEvent) => void;
}