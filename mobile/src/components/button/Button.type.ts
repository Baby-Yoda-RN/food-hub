import  {StyleProp, ViewStyle} from 'react-native';

export type TButtonProps = {
    title?: string;
    isDisabled?: boolean;
    onPress?: Function;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<ViewStyle>;
    buttonSize?: string;
    buttonTheme?: string;
    buttonOutline?: boolean;
    buttonOutlineColor?: string;
    rightIconName?: string;
    leftIconName?: string;
    leftIconStyle?: StyleProp<ViewStyle>;
    rightIconStyle?: StyleProp<ViewStyle>;
    iconWidth?: number;
    iconHeight?: number;

}