<<<<<<< HEAD
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
=======
import React, {useState, FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/Icon';
import { styles } from './RatingStars.styles';
import { size} from '../../theme';
import { TRatingStarsProps } from './RatingStars.type';

export const RatingStars: FC<TRatingStarsProps> = ({userRating = 0}) => {
    const [currentRating, setCurrentRating] = useState(userRating);
    const ratingsArray: number[] = [1,2,3,4,5];
    let ratingDescription: string = '';

    switch(currentRating) {
        case 1:
            ratingDescription = 'Bad';
            break;  
        case 2: 
            ratingDescription = 'Poor';
            break;
        case 3:
            ratingDescription = 'Average';
            break;
        case 4:
            ratingDescription = 'Good';
            break;
        case 5: 
            ratingDescription = 'Great';
            break;
        default:
            ratingDescription = 'Please Rate Us!'
    }

    return(
        <>
        <View style={styles.titleContainer}>
            <Text style = {styles.title}>{ratingDescription} </Text>
        </View>
        <View style = {styles.container}>
            
            {
                ratingsArray.map((item, key) => {
                    return(
                        <TouchableOpacity 
                        key = {item} 
                        onPress = {() => setCurrentRating(item)}>
                            <View>
                                <Icon 
                                name = {item <= currentRating ? 'Star' : 'StarHollow'}
                                width={size.lg} 
                                height={size.lg}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
        </>
    )
  
>>>>>>> 62cc66d9273778050ae2a506453bf7b1dcadd488
}