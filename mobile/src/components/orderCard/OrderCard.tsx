import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {color, size} from 'theme';
import {Button} from '../button/Button';
import {Icon} from '../icon/Icon';
import {styles} from './OrderCard.styles';
import {TOrderCard} from './OrderCard.type';

export const OrderCard: FC<TOrderCard> = ({
  order,
  handleLeftButton,
  handleRightButton,
  leftButtonTitle,
  rightButtonTitle,
}) => {
  const {delivered} = order;
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.rowContainer}>
        <View style={[styles.imageContainer, styles.shadow]}>
          <Image source={{uri: order.restaurantImage}} style={styles.image} />
        </View>
        <View style={styles.orderInfoContainer}>
          <View style={styles.rowDirection}>
            {delivered && (
              <View style={[styles.rowDirection, styles.centerer]}>
                <Text style={styles.grayText}>{order.date}</Text>
                <Icon
                  name="Bullet"
                  width={size.xs}
                  height={size.xs}
                  fill={color.grayMid}
                />
              </View>
            )}
            <Text style={styles.grayText}>{order.items + ' Items'}</Text>
          </View>
          <View style={[styles.rowDirection, styles.centerer]}>
            <Text style={styles.restaurantText}>{order.restaurantName}</Text>
            <Icon name="CheckMark" width={size.sm} height={size.sm} />
          </View>
          {delivered && (
            <View style={[styles.rowDirection, styles.centerer]}>
              <Icon
                name="Bullet"
                width={size.sm}
                height={size.sm}
                fill={color.success}
              />
              <Text style={styles.orderStatusText}>{order.status}</Text>
            </View>
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
            <Text style={styles.subtitle}>Estimated Arrival</Text>
            <Text style={styles.estimatedTimeText}>{order.estimatedTime}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Now</Text>
            <Text style={styles.status2}>{order.status}</Text>
          </View>
        </View>
      )}
      <View style={styles.rowContainer}>
        <Button
          title={leftButtonTitle}
          containerStyle={[styles.button, styles.shadow]}
          titleStyle={styles.primaryText}
          buttonOutline
          buttonOutlineColor={color.primary}
          buttonTheme={color.white}
          onPress={handleLeftButton}
        />
        <View style={styles.divider} />
        <Button
          title={rightButtonTitle}
          containerStyle={[styles.button, styles.shadow]}
          titleStyle={styles.whiteText}
          onPress={handleRightButton}
        />
      </View>
    </View>
  );
};
