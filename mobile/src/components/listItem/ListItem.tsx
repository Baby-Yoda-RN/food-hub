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
  itemQuantity = 0,
  iconSize,
  onPressCross,
  onPressMinus,
  onPressPlus,
  ...rest
}) => {
 
  return (
    <View style={styles.Container} {...rest}>
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

      <View>
        <View style={styles.TopRightIconContainer}>
          <TouchableOpacity onPress={pressCross}>
            <Icon
              name={'Cross'}
              width={iconSize}
              height={iconSize}
            />
          </TouchableOpacity>
        </View>
      
        <View style={styles.IconContainer}>
          <TouchableOpacity onPress={pressMinus}>
            <Icon
              name={'Minus'}
              width={iconSize}
              height={iconSize}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.ItemQuantity}>{itemQuantity}</Text>
          </View>
          <TouchableOpacity onPress={pressPlus}>
            <Icon
              name={'Plus'}
              width={iconSize}
              height={iconSize}
            />
          </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
};