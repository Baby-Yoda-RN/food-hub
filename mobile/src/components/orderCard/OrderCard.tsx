import React, {CSSProperties, FC} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {color, size} from '../../theme';
import {styles} from './OrderCard.styles';
import {OrderCardProps} from './OrderCard.type';

const logo =
  'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png';

const Button: FC<{title: string; outlined?: boolean}> = ({title, outlined}) => {
  let newStyles: StyleProp<ViewStyle> = {};

  if (outlined) {
    newStyles = {
      backgroundColor: color.white,
      borderColor: color.primary,
      borderWidth: 1,
    };
  }

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: color.primary,
          paddingHorizontal: 16,
          paddingVertical:12,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          width:'45%'
        },
        newStyles,
      ]}>
      <Text style={{color: outlined ? color.primary : color.white}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const OrderCard: FC<OrderCardProps> = () => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={[styles.imageContainer, styles.shadow]}>
          <Image source={{uri: logo}} style={styles.image} />
        </View>
        <View style={{width: '50%', justifyContent: 'space-evenly'}}>
          <Text style={{color: color.grayMid, fontSize: 12}}>3 Items</Text>
          <Text
            style={{color: color.black, fontWeight: '600', fontSize: size.rg}}>
            Starbuck
          </Text>
        </View>
        <View>
          <Text style={{color: color.primary, fontSize: 16}}>#264100</Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{color: color.grayMid, fontSize: 12}}>
            Estimated Arrival
          </Text>
          <Text style={{color: color.black, fontSize: 36, fontWeight: '600'}}>
            25 min
          </Text>
        </View>
        <View>
          <Text
            style={{textAlign: 'right', color: color.grayMid, fontSize: 12}}>
            Now
          </Text>
          <Text style={{fontWeight: '400', color: color.black, fontSize: 14}}>
            Food on the way
          </Text>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Button title="Cancel" outlined />
        <View style={{width:'5%'}}/>
        <Button title="Track Order" />
      </View>
    </View>
  );
};
