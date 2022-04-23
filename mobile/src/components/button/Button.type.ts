import  {StyleProp, ViewStyle} from 'react-native';

export type TButtonProps = {
    title?: string;
    isDisabled?: boolean;
    onPress?: Function;
    press?: Function;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<ViewStyle>;
    rightIcon?: string;
    leftIcon?: string;

}