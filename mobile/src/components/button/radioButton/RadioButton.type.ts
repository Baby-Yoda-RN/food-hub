import { StyleProp, ViewStyle } from "react-native"

type TData = {
  value: string,
  image:string,
}

export type TRadioButton = {
  data:TData[],
  selected:string | null,
  onPressButton:(value:string|null)=> void,
  buttonStyle?:StyleProp<ViewStyle>
  containerStyle?:StyleProp<ViewStyle>
}