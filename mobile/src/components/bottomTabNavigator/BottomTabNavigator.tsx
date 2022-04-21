import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface BottomTabNavigatorProps {
  state?:string,
  icons?: string[],
  navigation?:[],
}

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

const styles = StyleSheet.create({
  container:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-between',
    padding:16,
  },
  iconContainer:{
    padding:16,
  },
  icon:{
    padding:20,
    backgroundColor:'#FE724C',
    borderRadius:50,
  },
  notification:{
    position:'absolute',
    top:0,
    right:0,
    padding:12,
    backgroundColor:'#FFC529',
    borderRadius:8,
  }
})