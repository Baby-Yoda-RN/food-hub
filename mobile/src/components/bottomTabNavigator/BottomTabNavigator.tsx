import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import {styles} from './BottomTabNavigator.styles'
import { BottomTabNavigatorProps } from './BottomTabNavigator.type'

const Icon = () => {
  return (
    <View style={styles.iconContainer}>
      <View  style={styles.notification}/>
      <View style={styles.icon}/>
    </View>
  )
}

export const BottomTabNavigator: FC<BottomTabNavigatorProps> = ({state, icons, navigation}) => {
  return (
    <View style={styles.container}>
      <Icon/>
      <Icon/>
      <Icon/>
      <Icon/>
      <Icon/>
    </View>
  )
}