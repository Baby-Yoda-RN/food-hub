import { Dispatch, SetStateAction } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type TToggleButtonProps = {
    primaryText: string;
    secondaryText: string;
    containerStyle?: StyleProp<ViewStyle>;
    activeButtonStyle?: StyleProp<ViewStyle>
    option?: boolean;
    setOption?:Dispatch<SetStateAction<boolean>>;
    buttonTheme: string;
}