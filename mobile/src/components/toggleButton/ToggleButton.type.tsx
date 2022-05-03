import { StyleProp, View, ViewStyle } from "react-native";

export type TToggleButtonProps = {
    primaryText: string;
    secondaryText: string;
    containerStyle?: StyleProp<ViewStyle>;
    activeButtonStyle?: StyleProp<ViewStyle>
    option: boolean | null;
    setOption:(option:boolean) => void;
    buttonTheme: string;
}