import { StyleProp, ViewStyle } from "react-native";

export type TToggleButtonProps = {
    primaryText: string;
    secondaryText: string;
    selectionMode: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    buttonHeight?: number;
    buttonWidth?: number;
    buttonTheme: string;
    switchData: boolean;
}