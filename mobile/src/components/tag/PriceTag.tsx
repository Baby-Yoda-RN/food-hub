import React, {FC} from 'react';
import {Text} from 'react-native';
import {Tag} from './Tag';
import {styles} from './Tag.style';

type TPriceTagProps = {
  price: number;
};

export const PriceTag: FC<TPriceTagProps> = ({price}) => {
  const render = () => (
    <>
      <Text style={styles.dollarSign}>$</Text>
      <Text style={styles.priceText}>{price.toFixed(2)}</Text>
    </>
  );

  return <Tag renderTag={render} />;
};
