import React, {FC} from "react";
import { Text, View } from "react-native";
import { 
    TextInput,
    Header,
    Button,
} from "../../components";
import { size } from "../../theme";
import { styles } from "./ResetPassword.style";
import { TResetPasswordViewProps } from "./ResetPassword.type"

export const ResetPasswordView: FC<TResetPasswordViewProps> = ({
    title,
    subtitle,
    press,
}) => {
    return(
        <View>
            <Header 
                leftIconName="ChevronLeft"
                iconWidth={size.md}
                iconHeight={size.md}
                containerStyle={styles.headerContainer}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <TextInput type="email"/>
                <Button
                    title="SEND NEW PASSWORD"
                    containerStyle={styles.buttonContainer}
                    titleStyle={styles.buttonText}
                    onPress={press}
                />
            </View>
        </View>
    )
}