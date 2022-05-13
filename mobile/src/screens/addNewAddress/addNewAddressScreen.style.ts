import { StyleSheet } from 'react-native';
import { color, font, size } from '../../theme';

export const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        margin: size.rg,
        justifyContent:'space-evenly'
    },
    section:
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
        paddingVertical: size.rg,
        marginVertical: size.rg,
        shadowColor: color.black,
        elevation: size.md,
    },
    text: {
        fontFamily: font.medium,
    }

});