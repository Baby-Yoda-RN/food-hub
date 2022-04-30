import { StyleSheet } from 'react-native';
import { color, font, size } from '../../theme';

export const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        margin: size.rg,
        justifyContent:'space-evenly'
    },
    header: {
        padding: size.sm,
        fontfamily: font.bold
    },
    title: {
        fontSize: size.lg,
        fontFamily: font.semiBold,
        color: color.black,
    },
    button: {
        padding: size.lg,
        borderRadius: size.xxl
    },
    text: {
        fontFamily: font.medium,
    }

});