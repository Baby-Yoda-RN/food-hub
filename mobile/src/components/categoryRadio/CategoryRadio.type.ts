import type {ViewStyle, StyleProp, Image} from 'react-native';

export type TCategoryRadioProps = {
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<ViewStyle>;
    image: string;
    title: string;
    press?: Function;
    onPress?: Function;
    isDisabled?: boolean;
}