import  { StyleProp, ViewStyle} from 'react-native';

export type THeaderProps = {
    title?: string;
    deliveryLocation?: string;
    containerStyle?: ViewStyle;
    leftPress?: () => void;
    rightPress?: () => void;
    leftIconName?: string;
    rightIconName?: string;
    rightIconLocation?: string;
    leftIconStyle?: ViewStyle;
    rightIconStyle?: ViewStyle;
    iconWidth?: number;
    iconHeight?: number;
}