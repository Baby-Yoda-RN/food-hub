import { StyleSheet } from "react-native";
import { color, size} from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.rg,
    paddingVertical: size.sm,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.lg,
  },


  leftComponentStyle: {
  },
  rightComponentStyle: {

  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: color.black,
    flex: 1,
    padding: 10,
  },

  deliverTo: {
    fontSize: size.md,
    textAlign: "center",
    color: color.grayMid,
    flex: 1,
    padding: size.sm,
  },

  deliveryLocation: {
    fontSize: size.rg,
    textAlign: "center",
    color: color.primary,
    flex: 1,
    padding: size.sm,
  },

  leftIcon: {
    alignItems: 'center',
    padding: size.sm,
    borderRadius: size.md,
    borderColor: '#ddd',
    borderBottomWidth: size.xxs,
    borderRightWidth: size.xxs,
    shadowColor: color.black,
    shadowOffset: { width: size.xxs, height: size.xxs },
    shadowOpacity: 0.9,
    shadowRadius: size.sm,
  },

  rightIcon: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    shadowColor: color.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },

  image: {
    borderRadius: 12,
    alignItems: 'center',
    height: 38,
    width: 38,
  }
});
