import { StyleSheet } from "react-native";
import { color, size } from "../../theme";

export const styles = StyleSheet.create({
    textInputContainer: {
        marginBottom: size.rg,
    },
    buttonContainer: {
        justifyContent: 'center',
        marginTop: 4,
    },
    error: {
        fontFamily: 'Sofia Pro',
        color: color.red,
        marginLeft: size.rg,
        marginTop: size.xs,
    },
    container: {
        flex: 1,
        backgroundColor: color.white,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: size.lg,
    },
    errorContainer: {
        marginVertical: size.lg,
        left: -size.rg,
        alignItems: 'center',
    },
});