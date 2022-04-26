import React, {FC, useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TToggleButtonProps } from './ToggleButton.type';
import { styles } from './toggleButton.styles';
import { color, size } from '../../theme';

export const ToggleButton: FC<TToggleButtonProps> = ({
    primaryText = 'Left Toggle',
    secondaryText = 'Right Toggle',
    selectionMode,
    containerStyle,
    buttonHeight = size.rg,
    buttonWidth = size.lg,
    buttonTheme = color.primary,
    switchData = false,
    ...rest
}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updatedSwitchData = (id: boolean) => {
        setSelectionMode(id);
    }
    return (
        <View>
            <View
                style={{
                    height: 44,
                    width: 215,
                    backgroundColor: color.white,
                    borderRadius: size.rg,
                    borderWidth: 1,
                    borderColor: buttonTheme,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 2,
                }}
            >
                <TouchableOpacity
                    onPress={()=> updatedSwitchData(true)}
                        style={[
                            styles.container,
                            containerStyle,
                            {
                                flex: 1,
                                backgroundColor: getSelectionMode ? buttonTheme : color.white,
                                borderRadius: size.rg,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }
                        ]}
                    activeOpacity={1}
                    {...rest}

                >
                    <Text
                        style={{
                            color: getSelectionMode ? color.white : buttonTheme,
                        }}
                    >
                        {primaryText}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> updatedSwitchData(false)}
                        style={[
                            styles.container,
                            containerStyle,
                            {
                                flex: 1,
                                backgroundColor: !getSelectionMode ? buttonTheme : color.white,
                                borderRadius: size.rg,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }
                        ]}
                    activeOpacity={1}
                    {...rest}

                >
                    <Text
                        style={{
                            color: !getSelectionMode ? color.white : buttonTheme,
                        }}
                    >
                        {secondaryText}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}