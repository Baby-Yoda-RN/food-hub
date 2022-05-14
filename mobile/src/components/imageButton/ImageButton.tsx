import React, {FC} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {styles} from './ImageButton.style';
import {TImageButton} from './ImageButton.type';

export const ImageButton: FC<TImageButton> = ({
  data,
  selected,
  onPressButton,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      onLongPress={() => onPressButton(null)}
      onPress={() => onPressButton(data.value)}
      style={[
        styles.option,
        styles.shadow,
        data.value === selected && styles.selected,
        buttonStyle,
      ]}>
      <Image resizeMode='cover' style={styles.imageContainer} source={{uri: data.image}} />
      <View style={styles.divider} />
      <Text
        numberOfLines={1}
        style={
          data.value === selected
            ? styles.textOptionSelected
            : styles.textOption
        }>
        {data.value}
      </Text>
    </TouchableOpacity>
  );
};
