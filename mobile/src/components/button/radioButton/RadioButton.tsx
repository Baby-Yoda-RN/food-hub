import React, {FC, useState} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './RadioButton.style';
import {TRadioButton} from './RadioButton.type';

export const RadioButton: FC<TRadioButton> = ({
  data,
  selected,
  onPressButton,
  buttonStyle,
  containerStyle
}) => {

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={containerStyle}>
      {data.map(item => {
        return (
          <TouchableOpacity
            onPress={() => onPressButton(item.value)}
            key={item.value}
            style={[(item.value === selected? styles.selected:styles.unselected),styles.option, styles.shadow, buttonStyle]}>
            <Image
              style={styles.img}
              source={{uri: item.image}}
            />
            <View style={styles.divider}/>
            <Text numberOfLines={1} style={item.value === selected? styles.textOptionSelected:styles.textOption}>{item.value}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
