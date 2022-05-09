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
    Container,
    RatingStars,
} from "../../components";
import { size } from "../../theme";
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
        <Container
            backgroundImage={require('../../assets/images/pizza_hut.png')}
        >
            <View
                style={{
                    alignItems: 'center', 
                    justifyContent: 'center',
                    paddingTop: size.xxl,
                }}
            >
                <Image source={require('../../assets/images/pizza_hut_logo.png')}
                style={{
                    height: 100, 
                    width: 100, 
                    borderRadius: 100
                }}
                />
            </View>
            <Text style={styles.title}>{restaurant}</Text>
            <Text style={styles.subtitle}>{address}</Text>
            <Text style={styles.delivered}>
                Order Delivered
            </Text>
            <Text style={styles.title}>Please Rate Delivery Service</Text>
            <RatingStars />
            <TextInput type={"regular"} containerStyle={{height: 168}}/>
            <Button title="SUBMIT" containerStyle={styles.buttonContainer}/>
        </Container>
    )
}