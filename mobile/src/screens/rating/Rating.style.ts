import { StyleSheet } from "react-native";
import { color, font, size } from "../../theme";

export const styles = StyleSheet.create({
    leftIcon: {
        backgroundColor: color.white,
        borderRadius: size.sm,
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
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: size.lg,
        maxWidth: size.xxl,
    },
    logo: {
        height: size.xxl,
        width: size.xxl,
        borderWidth: size.md,
        borderColor: color.white,
        borderRadius: size.xxl,
        alignItems: 'center',
    },
    checkMark: {
        position: 'absolute',
        bottom: size.rg,
        right: size.rg,
        padding: 0,
        borderWidth: size.xs,
        borderRadius: size.lg,
        borderColor: color.white,
    },
    headerContainer: {
        paddingLeft: size.lg,
        paddingTop: size.lg,
    },
    largeText: {
        fontFamily: font.semiBold,
        fontSize: size.rg,
        color: color.black,
        marginTop: size.rg,
        textAlign: 'center'
    },
    smallText: {
        marginBottom: size.sm,
        textAlign: 'center'
    },
    delivered: {
        color: color.green,
        marginBottom: size.md,
        textAlign: 'center',
    },
    rating: {
        fontSize: size.lg,
        color: color.primary,
        marginTop: size.rg,
    },

    inputContainer: {
        height: 168,
        alignItems: 'flex-start',
        margin: 0,
    },
    restaurantImage: {
        height: size.xxl,
        margin: size.sm,
        padding: size.md,
    },
    imageStyle: {
        borderRadius: size.md,
    },
    button: {
        marginVertical: size.rg,
        padding: size.rg,
    }
})