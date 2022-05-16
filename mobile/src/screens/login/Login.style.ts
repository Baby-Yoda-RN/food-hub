import { StyleSheet } from 'react-native';
import { color, font, size } from '../../theme';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        marginTop: size.md,
        paddingLeft: size.md,
    },
    title: {
        fontSize: size.lg,
        fontFamily: font.semiBold,
        color: color.black,
        marginTop: size.xxl,
    },
    textInputContainer: {
        marginVertical: size.xxs,
    },
    button: {
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
    },
    errorContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText:{
        textAlign:'center',
        color:color.red,
        fontFamily:font.semiBold
    }
});