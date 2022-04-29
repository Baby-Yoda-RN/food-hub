import React, {FC} from "react";
import { View,TouchableOpacity } from "react-native";
import { Icon } from "../icon/Icon";
import { TRatingStarsProps } from "./ratingStars.type";
import { color } from "../../theme";

export const RatingStars: FC<TRatingStarsProps> = ({
    score,
    descriptions,
}) => {
    switch (score){
        case 1:
            return (
                <TouchableOpacity>
                    <Icon name="Star" fill={color.yellow}/> 
                    <Icon name="Star" fill={undefined}/> 
                    <Icon name="Star" fill={undefined}/>  
                    <Icon name="Star" fill={undefined}/>  
                    <Icon name="Star" fill={undefined}/> 
                </TouchableOpacity>
            )
        case 2:
            return (
                <View>
                    <Icon name="Star" fill={color.yellow}/> 
                    <Icon name="Star" fill={color.yellow}/> 
                    <Icon name="Star" fill={undefined}/>  
                    <Icon name="Star" fill={undefined}/>  
                    <Icon name="Star" fill={undefined}/> 
                </View>
            )
        case 3:
            return (
                <View>
                    <Icon name="Star" fill={color.yellow}/> 
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={undefined}/>  
                    <Icon name="Star" fill={undefined}/> 
                </View>
            )
        case 4:
            return (
                <View>
                    <Icon name="Star" fill={color.yellow}/> 
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={undefined}/> 
                </View>
            )
        case 5:
            return (
                <View>
                    <Icon name="Star" fill={color.yellow}/> 
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/> 
                </View>
            )
        default:
            return (
                <View>
                    <Icon name="Star" fill={color.yellow}/> 
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/>  
                    <Icon name="Star" fill={color.yellow}/> 
                </View> 
            )
    }
}