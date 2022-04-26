import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {size} from '../../theme';
import {Icon} from '../icon/Icon';
import {styles} from './Tag.style';
import {TTagProps} from './Tag.type';

export const Tag: FC<TTagProps> = ({rating, price = 10.95, usersVoted}) => {
  const renderPrice = () => (
    <View>
      {/* <Icon name='ChevronRightOrange' height={size.} /> */}
      <Text>{price}</Text>
    </View>
  );

  const render = () => null;

  return (
    <View style={styles.container}>
      {renderPrice()}
      {/* <Text>4.5</Text>
      <Icon
        name="Star"
        height={12}
        width={12}
        containerStyle={{
          paddingVertical: 4,
        }}
      /> */}
    </View>
  );
};
