import React, {FC, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TCartScreenViewProps} from './Cart.type';
import {Container, Header, ListItem, TextInput, Button} from '../../components';
import {size} from '../../theme';
import {styles} from './Cart.style';

export const CartScreenView: FC<TCartScreenViewProps> = ({
  onPress,
  title,
  listItemArray,
  setListItemArray,
  handleDelete,
  handleIncrement,
  handleDecrement,
}) => {
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const taxRate = 0.08;
  const deliveryRate = 0.05;

  useEffect(() => {
    const subTotal = listItemArray.reduce(
      (previous, current) => current.price * current.quantity + previous,
      0,
    );

    const tax = Math.round(subTotal * taxRate * 100) / 100;

    const delivery = Math.round(subTotal * deliveryRate * 100) / 100;

    const total = Math.round((subTotal + tax + delivery) * 100) / 100;

    const itemCount = listItemArray.reduce(
      (previous, current) => current.quantity + previous,
      0,
    );

    setSubTotal(Math.round(subTotal * 100) / 100);

    setTax(tax);

    setDelivery(delivery);

    setTotal(total);

    setItemCount(itemCount);
  }, [listItemArray]);

  return (
    <Container>
      <Header
        containerStyle={styles.header}
        title={title}
        leftIconName="ChevronLeft"
        iconHeight={size.rg}
        iconWidth={size.rg}
        leftPress={onPress}
      />
      {listItemArray.map(listItem => (
        <ListItem
          key={listItem.id}
          title={listItem.title}
          subTitle={listItem.subTitle}
          image={listItem.image}
          price={listItem.price}
          itemQuantity={listItem.quantity}
          iconSize={25}
          pressCross={() =>
            handleDelete(listItemArray, listItem, setListItemArray)
          }
          pressPlus={() =>
            handleIncrement(listItemArray, listItem, setListItemArray)
          }
          pressMinus={() =>
            handleDecrement(listItemArray, listItem, setListItemArray)
          }
        />
      ))}

      <TextInput type="regular" placeholder="Promo Code" />

      <View style={styles.billContainer}>
        <View style={styles.billItemContainer}>
          <Text style={styles.text}>Subtotal</Text>
          <View style={styles.rightColumn}>
            <Text style={styles.price}>${subTotal}</Text>
            <Text style={styles.symbol}>USD</Text>
          </View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.billItemContainer}>
          <Text style={styles.text}>Tax and Fees </Text>
          <View style={styles.rightColumn}>
            <Text style={styles.price}>${tax}</Text>
            <Text style={styles.symbol}>USD</Text>
          </View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.billItemContainer}>
          <Text style={styles.text}>Delivery </Text>
          <View style={styles.rightColumn}>
            <Text style={styles.price}>${delivery}</Text>
            <Text style={styles.symbol}>USD</Text>
          </View>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.billItemContainer}>
          <Text style={styles.text}>Total </Text>
          <Text>({itemCount} items)</Text>
          <View style={styles.rightColumn}>
            <Text style={styles.price}>${total}</Text>
            <Text style={styles.symbol}>USD</Text>
          </View>
        </View>
      </View>

      <Button title="CHECKOUT" containerStyle={styles.button} />
    </Container>
  );
};
