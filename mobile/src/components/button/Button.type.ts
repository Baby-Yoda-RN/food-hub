import  {GestureResponderEvent, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type TButtonProps = {
    title?: string;
    isDisabled?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    buttonTheme?: string;
    rightIconName?: string;
    leftIconName?: string;
    leftIconStyle?: StyleProp<ViewStyle>;
    rightIconStyle?: StyleProp<ViewStyle>;
    iconSize?: number;

}