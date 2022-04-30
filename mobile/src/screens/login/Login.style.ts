import { StyleSheet } from 'react-native';
import { color, font, size } from '../../theme';

export const styles = StyleSheet.create({
    backgroundImageContainer: {
        position: 'absolute',
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'transparent',
        borderColor: 'grey',
        height: '100%',
        marginTop: size.md,
        paddingLeft: size.md,
    },
    title: {
        fontSize: size.lg,
        fontFamily: font.semiBold,
        color: color.black,
        marginTop: size.xl,
    },
    textInputContainer: {
        marginVertical: size.md,
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

});