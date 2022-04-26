import React, {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import { styles } from './CategoryRadio.styles';
import { TCategoryRadioProps } from './CategoryRadio.type';

export const CategoryRadio:FC<TCategoryRadioProps> = ({
    image = 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hamburger:product-header-desktop?wid=829&hei=455&dpr=off', 
    title = 'Burgers',
}) =>{
    return (
        <TouchableOpacity 
            style={styles.container}
        >
            <Image
                source={{ 
                    uri: image
                }}
            />
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
}