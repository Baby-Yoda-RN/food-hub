import { StyleSheet } from "react-native";
import { color, font, size } from "../../theme";

export const styles = StyleSheet.create({
    buttonContainer: {
        padding: size.rg,
        marginTop: size.lg,
    },
    buttonText: {
        fontFamily: font.regular,
    },
    container: {
        justifyContent: 'center',
        padding: size.lg,
    },
    headerContainer: {
        paddingLeft: size.lg,
        paddingTop: size.lg,
    },
    title: {
        fontFamily: font.semiBold,
        fontSize: 18,
        color: color.black,
        marginTop: size.rg,
        textAlign: 'center'
    },
    subtitle: {
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
})