import React, {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import { styles } from './CategoryRadio.styles';
import { TCategoryRadioProps } from './CategoryRadio.type';

export const CategoryRadio:FC<TCategoryRadioProps> = ({image, title}) =>{
    return (
        <TouchableOpacity style={styles.container}>
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
}