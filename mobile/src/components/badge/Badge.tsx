import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { BadgeProps } from './Badge.type'
import { styles } from './Badge.style'

export const Badge:FC<BadgeProps> = ({backgroundColor = '#FFC529', value, color = 'white'}) => {
  return (
    <View style={[styles.container,{backgroundColor}]}>
      <Text style={{color}}>{value}</Text>
    </View>
  )
}