import React, {useState, FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/Icon';
import { styles } from './RatingStars.styles';
import { size} from '../../theme';

import { TRatingStarsProps } from './RatingStars.type';

export const RatingStars: FC<TRatingStarsProps> = () => {
    const [defaultRating, setDefaultRating] = useState(0);
    const [rating, setRating] = useState([1,2,3,4,5]);
    let ratingDescription: string = '';

    switch(defaultRating) {
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
                rating.map((item, key) => {
                    return(
                        <TouchableOpacity 
                        key = {item} 
                        onPress = {() => setDefaultRating(item)}>
                            <View>
                                <Icon 
                                name = {item <= defaultRating ? 'Star' : 'StarHollow'}
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
  
}