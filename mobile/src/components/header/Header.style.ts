import {ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  titleTextStyle: TextStyle;
  leftComponentStyle: ViewStyle;
  rightComponentStyle: ViewStyle;
}

export function _container(
  height: number | string,
  width: number | string,
  backgroundColor: string,
  statusBarHidden: boolean,
): ViewStyle {
  return {
    width: width || "100%",
    backgroundColor: backgroundColor || "white",
  };
}

export function _innerContainer(statusBarHidden: boolean): ViewStyle {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
}

export default StyleSheet.create<Style>({
  leftComponentStyle: {
    left: 16,
    position: "absolute",
  },
  rightComponentStyle: {
    right: 16,
    position: "absolute",
  },
  titleTextStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "rgba(110, 157, 251, 1.0)",
  },
});
