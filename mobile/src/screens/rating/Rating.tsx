import React, {FC} from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import { TRating } from "./Rating.type";
import { RatingScreenView } from "./Rating.view";

export const Rating: FC<TRating> = () => {
    return (
        <RatingScreenView isLoading={false}/>
    )
}