import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import {styles} from './ListItem.styles';
import {Icon} from '../../components';
import { TListItemProps } from './ListItem.type';


export const ListItem: FC<TListItemProps> = ({
  title = '',
  subTitle ='',
  image = 'https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg',
  price ='',
  leftIconName = null,
  rightIconName = null,
  iconWidth,
  iconHeight,
  ...rest
}) => {
 
  return (
    <TouchableOpacity style={styles.Container} {...rest}>
      <Image 
      style={styles.Image}
      source = {{uri: image}}/>
      <View style={styles.TextContainer}>
        <View>
          <Text style={styles.Title}>{title}</Text>
        </View>

        <View>
          <Text style={styles.SubTitle}>{subTitle}</Text>
        </View>

        <View>
            <Text style={styles.Price}> {price}</Text>
        </View>
      </View>

      <View style={styles.IconContainer}>
        {!!leftIconName && (
          <Icon
            name={leftIconName}
            width={iconWidth}
            height={iconHeight}
          />
        )}
        {!!rightIconName && (
          <Icon
            name={rightIconName}
            width={iconWidth}
            height={iconHeight}
          />
        )}
      </View>
    
    </TouchableOpacity>
  );
};