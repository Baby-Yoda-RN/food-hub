import { StyleProp, ViewStyle } from "react-native";

export type TRatingStarsProps = {
    fill?: boolean;
    caption?: string;
    totalStars: number;
    position?: number;
    starStyle?: StyleProp<ViewStyle>
    selectedColor?: string;
    unSelectedColor?: string;
    isDisabled?: boolean;
    size?: number;
    onRatingClick?: ( position: number ) => void;
}