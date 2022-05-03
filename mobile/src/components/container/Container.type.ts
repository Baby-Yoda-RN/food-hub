import React, { ReactNode, Requireable } from "react";
import { ImageSourcePropType, ImageStyle, View, ViewStyle } from "react-native";

export type TContainer = {
  isLoading?:boolean,
  safeAreaStyle?: ViewStyle
  containerStyle?: ViewStyle
  contentStyle?:ViewStyle
  header?:ReactNode
  headerStyle?:ViewStyle
  footer?:ReactNode
  footerStyle?:ViewStyle
  isScrollViewDisabled?: boolean
  backgroundImage?:ImageSourcePropType
  backgroundImageStyle?:ImageStyle
}
