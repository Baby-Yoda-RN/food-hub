import {StyleProp, TextStyle, ViewStyle} from 'react-native'

export type BadgeProps = {
  value?: Number | String,
  containerStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
}