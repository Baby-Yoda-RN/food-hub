<<<<<<< HEAD
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
=======

export type TRatingStarsProps ={
    userRating?: number;
>>>>>>> 62cc66d9273778050ae2a506453bf7b1dcadd488
}