import { StyleSheet } from "react-native";
import { color, font, size } from "../../theme";

export const styles = StyleSheet.create({
    backIcon: {
        height: 12,
        width: 12,
        fill: color.green,
    },
    buttonText: {
        fontFamily: font.regular,
    },
    bullet: {
        height: size.sm,
        width: size.sm,
        color: color.green,
        marginLeft: size.rg,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: size.xl,
    },
    headerContainer: {
        paddingLeft: size.lg,
        paddingTop: size.lg,
    },
    largeText: {
        fontFamily: font.semiBold,
        fontSize: 18,
        color: color.black,
        marginTop: size.rg,
        textAlign: 'center'
    },
    smallText: {
        marginBottom: size.lg,
        textAlign: 'center'
    },
    delivered: {
        color: color.green,
        marginBottom: size.lg,
        textAlign: 'center',
    },
    rating: {
        fontSize: size.lg,
        color: color.primary,
        marginTop: size.rg,
    },
    imageContainer: {
        height: 100, 
        width: 100, 
        borderWidth: 10,
        borderColor: color.white,
        borderRadius: 100,
        alignItems: 'center'
    },
    inputContainer: {
        height: 168,
        alignItems: 'flex-start'
    },
    restaurantImage: {
        height: 150,
        margin: 25,
    },
    imageStyle: {
        borderRadius: 10,
    }
})