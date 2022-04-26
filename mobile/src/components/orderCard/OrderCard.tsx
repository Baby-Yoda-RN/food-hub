import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {color, size} from '../../theme';
import {Button} from '../button/Button';
import {styles} from './OrderCard.styles';
import {TOrderCard} from './OrderCard.type';

export const OrderCard: FC<TOrderCard> = ({order, handleLeftButton, handleRightButton}) => {
  const {delivered} = order;
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.rowContainer}>
        <View style={[styles.imageContainer, styles.shadow]}>
          <Image source={{uri: order.restaurantImage}} style={styles.image} />
        </View>
        <View style={{width: '50%', justifyContent: 'space-evenly'}}>
          <View style={styles.rowDirection}>
            {delivered && (
              <Text style={styles.grayText}>{order.date + ' • '}</Text>
            )}
            <Text style={styles.grayText}>{order.items.length + ' Items'}</Text>
          </View>
          <Text
            style={{color: color.black, fontWeight: '600', fontSize: size.m}}>
            {order.restaurantName}
          </Text>
          {delivered && (
            <Text style={{color: color.success, fontSize: size.m}}>
              {'• ' + order.status}
            </Text>
          )}
        </View>
        <View>
          <Text style={styles.orderId}>
            {delivered ? order.total : '#' + order.uuid}
          </Text>
        </View>
      </View>
      {!delivered && (
        <View style={styles.rowContainer}>
          <View>
            <Text style={{color: color.grayMid}}>
              Estimated Arrival
            </Text>
            <Text style={{color: color.black, fontSize: size.lg, fontWeight: '600'}}>
              {order.estimatedTime}
            </Text>
          </View>
          <View>
            <Text
              style={{textAlign: 'right', color: color.grayMid}}>
              Now
            </Text>
            <Text style={{color: color.black, fontSize: 14}}>
              {order.status}
            </Text>
          </View>
        </View>
      )}
      <View style={styles.rowContainer}>
        <Button
          title={delivered?'Rate':'Cancel'}
          containerStyle={[styles.button,styles.shadow]}
          titleStyle={styles.primaryText}
          buttonOutline
          buttonOutlineColor={color.primary}
          buttonTheme={color.white}
          onPress={handleLeftButton}
        />
        <View style={{width: '5%'}} />
        <Button
          title={delivered?'Re-Order':"Track Order"}
          containerStyle={[styles.button,styles.shadow]}
          titleStyle={styles.whiteText}
          onPress={handleRightButton}
        />
      </View>
    </View>
  );
};
