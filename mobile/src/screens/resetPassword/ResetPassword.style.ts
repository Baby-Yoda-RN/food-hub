import { StyleSheet } from "react-native";
import { color, size, font } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: size.lg,
      },
      headerContainer: {
        paddingLeft: size.lg,
        paddingTop: size.lg,
      },
      title: {
        fontFamily: font.semiBold,
        fontSize: size.lg,
        color: color.black,
        marginTop: size.rg,
      },
      subtitle: {
        width: '65%',
        marginBottom: size.lg,
      },
      buttonText: {
        fontFamily: font.regular,
      },
      buttonContainer: {
        marginTop: size.lg,
        padding: size.rg,
      },
});