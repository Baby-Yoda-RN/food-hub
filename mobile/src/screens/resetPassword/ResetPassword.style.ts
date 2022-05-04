import { StyleSheet } from "react-native";
import { color, size, font } from "../../theme";

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
      marginTop: size.rg,
      marginBottom: size.lg,
  },
  button: {
      padding: size.rg,
      borderRadius: size.xl,
      shadowColor: color.black,
      elevation: size.md,
  },
  textContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
  },
  text: {
      marginVertical: size.rg,
      marginBottom: size.sm,
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