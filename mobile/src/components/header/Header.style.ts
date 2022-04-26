import { StyleSheet } from "react-native";
import { color } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 27,
    paddingVertical: 33,
  },

  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 100,
  },


  leftComponentStyle: {
  },
  rightComponentStyle: {

  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
    flex: 1,
    padding: 10,
  },

  location: {
    fontSize: 13,
    textAlign: "center",
    color: color.textOrange,
    flex: 1,
    padding: 10,
  },

  leftIcon: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    shadowColor: '#000000',
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
