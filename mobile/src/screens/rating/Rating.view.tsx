import React, {FC} from "react";
import { Text,View,TouchableOpacity,Image } from "react-native";
import {
    Icon,
    TextInput,
    Card,
    Button,
    Badge,
    Header,
} from "../../components";
import { styles } from "./Rating.style";
import { TRatingView } from "./Rating.type";

export const RatingScreenView: FC<TRatingView> = ({
    isLoading,
}) => {
    return (
        <>
            <Text>Test</Text>
        </>
    )
}