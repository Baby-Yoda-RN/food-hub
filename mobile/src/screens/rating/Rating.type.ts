import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation";
export type TRating = NativeStackScreenProps<RootStackParams, 'Rating'>

export type TRatingView = {
    isLoading?: boolean;

}