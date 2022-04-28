import React, {FC} from "react";
import { Text, View } from "react-native";
import { 
    TextInput,
    Header,
    Button,
} from "../../components";
import { size } from "../../theme";
import { styles } from "./ResetPassword.style";
import { TResetPasswordView } from "./ResetPassword.type"

export const ResetPasswordView: FC<TResetPasswordView> = () => {
    return(
        <View>
            <Header 
                leftIconName="ChevronLeft"
                iconWidth={size.md}
                iconHeight={size.md}
                containerStyle={styles.headerContainer}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Reset Password</Text>
                <Text style={styles.subtitle}>
                    Please enter your email address to request a password reset
                </Text>
                <TextInput type="email"/>
                <Button
                    title="SEND NEW PASSWORD"
                    containerStyle={styles.buttonContainer}
                    titleStyle={styles.buttonText}
                />
            </View>
        </View>
    )
}