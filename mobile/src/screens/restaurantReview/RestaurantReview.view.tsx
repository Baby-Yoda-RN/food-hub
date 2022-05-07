import React, {FC, useState} from "react";
import { Text,View,TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Icon,
    TextInput,
    Card,
    Button,
    Badge,
    Header,
    Container,
} from "../../components";
import { RestaurantCard } from "../../components/card/restaurantCard";
import { size } from "../../theme";
import { styles } from "./RestaurantReview.style"
import { TRestaurantReviewView } from "./RestaurantReview.type";

export const RestaurantReviewScreenView: FC<TRestaurantReviewView> = ({
    restaurant = 'Pizza Hut',
    restaurantImage,
    starRating,
    textRating,
    press,
}) => {
    const [review, setReview] = useState();
    return (
        <Container>
            <View
                style={{
                    alignItems: 'center', 
                    justifyContent: 'center',
                    paddingTop: size.xxl,
                }}
            >
                {/* <Image source={require('../../assets/images/pizza_hut_logo.png')}
                style={{
                    height: 100, 
                    width: 100, 
                    borderRadius: 10
                }}
                /> */}
            </View>
            <Text style={styles.title}>How was your last order from {restaurant}?</Text>
            <TextInput type={"regular"} value={review} onChangeText={() => setReview}/>
            <Button title="SUBMIT" containerStyle={styles.buttonContainer}/>
        </Container>
    )
}