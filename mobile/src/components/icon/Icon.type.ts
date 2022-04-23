import type {ViewStyle, StyleProp} from 'react-native';

export type TIcon = {
    name: string, 
    fill?: string,
    height?: number,
    width?: number,
    containerStyle?: StyleProp<ViewStyle>
}