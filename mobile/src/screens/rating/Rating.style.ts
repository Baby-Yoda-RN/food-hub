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
        fontSize: size.lg,
        color: color.black,
        marginTop: size.rg,
    },
    subtitle: {
        width: '65%',
        marginBottom: size.lg,
    },
    delivered: {
        width: '65%',
        color: color.green,
        marginBottom: size.lg,
    },
    rating: {
        fontSize: size.lg,
        color: color.primary,
        marginTop: size.rg,
    },
})