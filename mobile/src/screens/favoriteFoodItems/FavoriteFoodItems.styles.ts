import { StyleSheet } from 'react-native';
import { color, font, size } from '../../theme';

export const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        margin: size.rg,
    },
    toggleButtonContainer: {
        paddingVertical: size.lg,
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
        width: 160,
    },
    clearButton:{
        padding: size.rg,
        borderRadius: size.xxl,
        backgroundColor: color.transparent,
        
        width: 160,
    },
    text: {
        textAlign: 'center',
        margin: size.rg,
        fontFamily: font.semiBold,
    },
    primaryText:{
        color: color.primary,
    },
    inputTitles:{
        paddingTop: size.rg,
        paddingBottom: size.md,
    }

});