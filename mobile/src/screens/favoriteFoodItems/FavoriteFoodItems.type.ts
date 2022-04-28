import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation";

export type TFavoriteFoodItems = NativeStackScreenProps<RootStackParams, 'FavoriteFoodItems'>;

export type TFavoriteFoodItemsView = {
    press: () => void;
}