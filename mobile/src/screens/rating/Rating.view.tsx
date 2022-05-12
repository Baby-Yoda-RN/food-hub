import React, {FC} from "react";
import { Text,View,Image,SafeAreaView } from "react-native";
import {
    TextInput,
    Button,
    Container,
    RatingStars,
    Header,
    Icon,
} from "../../components";
import { styles } from "./Rating.style";
import { TRatingView } from "./Rating.type";

export const RatingScreenView: FC<TRatingView> = ({
    restaurant,
    address,
}) => {
    return (
        <Container
            backgroundImage={require('../../assets/images/pizza_hut.png')}
            backgroundImageStyle={styles.restaurantImage}
            imageStyle={styles.imageStyle}
            header={<Header leftIconName="ChevronLeft"/>}
        >
            <SafeAreaView>
                <View
                    style={styles.container}
                >
                    <Image source={require('../../assets/images/pizza_hut_logo.png')}
                    style={styles.imageContainer}
                    />
                </View>
                <Text style={styles.largeText}>Pizza Hut</Text>
                <Text style={styles.smallText}>123 Main Street</Text>
                <Text style={styles.delivered}>
                    Order Delivered
                </Text>
                <Text style={styles.largeText}>Please Rate Delivery Service</Text>
                <RatingStars />
                <TextInput containerStyle={styles.inputContainer}/>
                <Button title="SUBMIT"/>
            </SafeAreaView>
        </Container>
    )
}