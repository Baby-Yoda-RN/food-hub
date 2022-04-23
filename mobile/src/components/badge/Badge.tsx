import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { BadgeProps } from './Badge.type'
import { styles } from './Badge.style'

export const Badge:FC<BadgeProps> = ({value, containerStyle, textStyle}) => {
  return (
    <View style={[styles.container,containerStyle]}>
      <Text style={[styles.text,textStyle]}>{value}</Text>
    </View>
  )
}