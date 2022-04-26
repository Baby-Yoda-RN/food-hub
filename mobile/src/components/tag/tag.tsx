import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Icon} from '../icon/Icon';
import {styles} from './tag.style';
import {TTagProps} from './tag.type';

export const Tag: FC<TTagProps> = ({rating, price, usersVoted}) => {
  const renderPrice = () => <Text>{price}</Text>;

  const render = () => null;

  return (
    <View style={styles.container}>
      <Text>4.5</Text>
      <Icon
        name="Star"
        height={12}
        width={12}
        containerStyle={{
          paddingVertical: 4,
        }}
      />
    </View>
  );
};
