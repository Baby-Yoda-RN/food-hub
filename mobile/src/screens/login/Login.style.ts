import { StyleSheet } from 'react-native';
import { color, font, size } from '../../theme';

export const styles = StyleSheet.create({
    header: {
        paddingLeft: 0
    },
    title: {
        fontSize: size.lg,
        fontFamily: font.semiBold,
        color: color.black,
        marginTop: size.xl,
    },
    textInputContainer: {
        marginVertical: size.rg,
    },
    button: {
        padding: size.rg,
        borderRadius: size.xxl
    },
    textContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        marginVertical: size.rg,
        marginBottom: size.md,
        fontFamily: font.semiBold,
    },
    textNavigate: {
        color: color.primary,
    },

});