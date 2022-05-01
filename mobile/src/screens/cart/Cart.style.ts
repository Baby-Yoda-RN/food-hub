import { StyleSheet } from "react-native";
import { color, font, size } from "../../theme";

export const styles = StyleSheet.create({
    container: {

    },
    header: {
        paddingLeft: 0,
    },
    billContainer: {
        flexDirection: 'column',
    },
    billItemContainer: {
        flexDirection: 'row',
        marginVertical: size.rg,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: color.grayLow,
    },
    rightColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
    },
    text: {
        color: color.black,
        fontFamily: font.semiBold,
    },
    price: {
        color: color.black,
        fontSize: size.rg,
        fontFamily: font.semiBold,
    },
    symbol: {
        marginHorizontal: size.sm,
        color: color.grayMid,
        fontFamily: font.semiBold,
    },
    button: {
        borderRadius: size.xxl,
        padding: size.rg,
        marginTop: 'auto',
        marginBottom: size.lg,
        shadowColor: color.black,
        elevation: size.md,
    }
})