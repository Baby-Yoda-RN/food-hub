import React, {FC, useState} from "react";
import { View,TouchableOpacity, Animated } from "react-native";
import { Icon } from "../icon/Icon";
import { TRatingStarsProps } from "./ratingStars.type";
import { color } from "../../theme";
import { styles } from "./RatingStars.style";

export const RatingStars: FC<TRatingStarsProps> = ({
    fill,
    caption,
    totalStars,
    position = 5,
    starStyle,
    selectedColor,
    unSelectedColor,
    isDisabled,
    size,
    onRatingClick,
}) => {
    const [selected, setSelected] = useState<boolean>(false);
    const springValue = new Animated.Value(1);

    const spring = () => {
        springValue.setValue(1.2);

        Animated.spring(springValue, {
            toValue: 1,
            friction: 2,
            tension: 1,
            useNativeDriver: true,
        }).start();

        setSelected(!selected);
        onRatingClick(position);
    }

    const starSource = 
        fill && selectedColor === null ? <Icon name="Star"/> : <Icon name="StarHollow"/>;

    return (
        <TouchableOpacity>
           {starSource}
        </TouchableOpacity>
    )
}