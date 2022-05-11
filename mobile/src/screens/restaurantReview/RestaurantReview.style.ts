import { StyleSheet } from "react-native";
import { color, font, size } from "../../theme";

export const styles = StyleSheet.create({
    buttonContainer: {
        padding: size.rg,
        marginTop: size.lg,
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
})