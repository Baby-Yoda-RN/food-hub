import React, {FC} from "react";
import { Text,View,TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Icon,
    TextInput,
    Card,
    Button,
    Badge,
    Header,
} from "../../components";
import { RestaurantCard } from "../../components/card/restaurantCard";
import { styles } from "./Rating.style";
import { TRatingView } from "./Rating.type";

export const RatingScreenView: FC<TRatingView> = ({
    restaurant,
    address,
    isDelivered,
    restaurantImage,
    title,
    starRating,
    textRating,
    press,
}) => {
    return (
        <SafeAreaView>
            <Header containerStyle={styles.headerContainer}/>
            <RestaurantCard restaurant={restaurant}/>
            <Image source={restaurantImage}/>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>{address}</Text>
            <Text style={styles.delivered}>
                Order Delivered
            </Text>
            <Text style={styles.title}>Please Rate Delivery Service</Text>
            <Text style={styles.rating}>{textRating[starRating]}</Text>
            
        </SafeAreaView>
    )
}