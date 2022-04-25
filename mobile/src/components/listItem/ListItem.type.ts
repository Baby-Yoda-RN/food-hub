import { ImageSourcePropType } from "react-native";
export type TListItemProps = {
    title?: string;
    subTitle?: string;
    image?: string;
    price?: string;
    itemQuantity?: number;
    leftIconName?: string;
    rightIconName?: string;
    topRightIconName?: string;
    iconWidth?: number;
    iconHeight?: number
}