import { StyleSheet } from "react-native";
import { color, size } from "../../theme";

export const styles = StyleSheet.create({
    textInputContainer: {
        marginBottom: size.lg,
    },
    buttonContainer: {
        justifyContent: 'center',
        marginTop: 4,
    },
    container: {
        flex: 1,
        backgroundColor: color.white,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: size.lg,
    },
})