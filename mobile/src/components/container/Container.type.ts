import { StyleProp, ViewStyle } from "react-native";

export type TContainer = {
  isLoading?:boolean,
  safeAreaStyle?: StyleProp<ViewStyle>,
  containerStyle?: StyleProp<ViewStyle>,
}
