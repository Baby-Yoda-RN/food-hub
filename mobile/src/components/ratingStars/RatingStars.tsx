import React, {useState, FC} from 'react';
import { View, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/Icon';
import { styles } from './RatingStars.styles';
import { size} from '../../theme';

import { TRatingStarsProps } from './RatingStars.type';

export const RatingStars: FC<TRatingStarsProps> = () => {
    const [defaultRating, setDefaultRating] = useState(2);
    const [rating, setRating] = useState([1,2,3,4,5]);
    return(
        <View style = {styles.container}>
        
            {
                rating.map((item, key) => {
                    return(
                        <TouchableOpacity >
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
    )
  
}