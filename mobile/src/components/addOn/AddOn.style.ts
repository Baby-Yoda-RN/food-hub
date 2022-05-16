import { StyleSheet } from "react-native";
import { size, font, color } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: size.sm,
    },
    containerTitle: {
        flexDirection: 'row',
    },
    containerPrice: {
        flexDirection: 'row',

    },
    image: {
        width: size.lg,
        height: size.lg,
    },
    titleAddOn: {
        fontSize: size.rg,
        fontFamily: font.medium,
        textAlignVertical: 'center',
        marginHorizontal: size.sm,
        color: color.black,
    },


});