import { StyleSheet } from 'react-native';
import { color, font, size } from '../../theme';

export const styles = StyleSheet.create({
    
    title: {
        fontSize: size.lg,
        fontFamily: font.semiBold,
        color: color.black,
        marginTop: size.sm,
    },
    textInputContainer: {
        marginVertical: size.md,
    },
    button: {
        marginTop: size.lg,
        padding: size.rg,
        borderRadius: size.xxl,
        shadowColor: color.black,
        elevation: size.md,
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
    footerText: {
        color: color.textGray,
        fontFamily: font.semiBold,
        fontSize: size.md,
    },
    footerLine: {
        borderBottomColor: color.textGray,
    }

});