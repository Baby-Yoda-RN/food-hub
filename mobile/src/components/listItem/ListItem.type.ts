import { ImageSourcePropType } from "react-native";
export type TListItemProps = {
    title?: string;
    subTitle?: string;
    image?: string;
    price?: string;
    leftIconName?: string;
    rightIconName?: string;
    iconWidth?: number;
    iconHeight?: number
}