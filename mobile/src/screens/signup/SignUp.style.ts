import { StyleSheet } from 'react-native';
import { color, font, size } from '../../theme';

export const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        margin: size.rg,
    },
    buttonContainer:{
        paddingVertical: size.rg,
        alignItems: 'center',
    },
    header: {
        paddingVertical: size.rg,
    },
    title: {
        fontSize: size.lg,
        fontFamily: font.semiBold,
        color: color.black,
        paddingVertical: size.xs,
    },
    button: {
        padding: size.rg,
        borderRadius: size.xxl,
        width: 248,
    },
    text: {
        textAlign: 'center',
        margin: size.rg,
        fontFamily: font.semiBold,
    },
    inputTitles:{
        paddingTop: size.rg,
        paddingBottom: size.md,
    }

});