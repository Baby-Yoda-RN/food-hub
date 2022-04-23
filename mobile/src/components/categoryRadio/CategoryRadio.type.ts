import type {ViewStyle, StyleProp, Image} from 'react-native';

export type TCategoryRadioProps = {
    containerStyle?: StyleProp<ViewStyle>;
    image: string;
    title: string;
    onPress?: Function;
}