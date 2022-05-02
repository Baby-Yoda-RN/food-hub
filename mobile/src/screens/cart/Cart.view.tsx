import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TCartScreenViewProps} from './Cart.type';
import {Container, Header, ListItem, TextInput, Button} from '../../components';
import {size} from '../../theme';
import {styles} from './Cart.style';

export const CartScreenView: FC<TCartScreenViewProps> = ({
  title,
  onPress,
  listItemArray,
  setListItemArray,
  subTotal,
  tax,
  delivery,
  total,
  itemCount,
  handleDelete,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <Container containerStyle={styles.container}>
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
          key={listItem.uuid}
          title={listItem.name}
          subTitle={listItem.description}
          image={listItem.imageName}
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
