import React, {FC} from "react";
import { Text, View } from "react-native";
import { 
    TextInput,
    Header,
    Button,
} from "../../components";
import { styles } from "./ResetPassword.style";
import { TResetPasswordView } from "./ResetPassword.type"

export const ResetPasswordView: FC<TResetPasswordView> = ({
    errors,
    values,
    setValues,
    isLoading,
    handleResetPasswordButtonPress,
}) => {
    return(
        <View style={styles.container}>
            <View style={styles.errorContainer}>
                {errors.credentialError !== '' && (
                    <Text style={styles.error}>{errors.credentialError}</Text>
                )}
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    type="email"
                    isSensitive={true}
                    placeholder={"Email"}
                />
            </View>
            <View>
                {isLoading ? (
                    <Text>Please wait...</Text>
                ) : (
                    <Button 
                        isDisabled={
                            values.email.length > 0 ? false : true
                        }
                        title={"SEND NEW PASSWORD"}
                        onPress={handleResetPasswordButtonPress}
                    />
                )}
            </View>
        </View>
    )
}