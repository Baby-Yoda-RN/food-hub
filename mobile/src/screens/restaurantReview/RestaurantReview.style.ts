import { StyleSheet } from "react-native";
import { color, font, size } from "../../theme";

export const styles = StyleSheet.create({
    header: {
        padding: size.rg,
    },
    buttonContainer: {
        padding: size.rg,
        marginTop: size.lg,
    },
    containerTop: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: size.xxl,
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
    rating: {
        fontSize: size.lg,
        color: color.primary,
        marginTop: size.rg,
    },
    review: {
        height: 168,
        alignItems: 'flex-start',
    },
    image: {
        height: 100, 
        width: 100, 
        borderRadius: 10
    },
})