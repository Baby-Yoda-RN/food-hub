import { ReactNode, Requireable } from "react";
import { ImageSourcePropType, ViewStyle } from "react-native";

export type TContainer = {
  isLoading?:boolean,
  safeAreaStyle?: ViewStyle,
  containerStyle?: ViewStyle,
  contentStyle?:ViewStyle,
  header?:ReactNode,
  headerStyle?:ViewStyle,
  isScrollViewDisabled?: boolean,
  backgroundImage?:ImageSourcePropType
}
