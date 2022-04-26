import  {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

export type TButtonProps = {
    title?: string;
    isDisabled?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<ViewStyle>;
    buttonHeight?: number;
    buttonWidth?: number;
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