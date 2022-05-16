import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TCartScreenViewProps, TOrderSummary} from './Cart.type';
import {Container, Header, ListItem, TextInput, Button} from '../../components';
import {size} from '../../theme';
import {styles} from './Cart.style';
import {checkIfLastItemOfArray} from '../../utilities';

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
  promo,
  setPromo,
}) => {
  const oderSummary: TOrderSummary = [
    {id: 0, text: 'Subtotal', price: subTotal},
    {id: 1, text: 'Tax and Fees', price: tax},
    {id: 2, text: 'Delivery', price: delivery},
    {id: 3, text: 'Total', price: total},
  ];

  return (
    <Container
      containerStyle={styles.container}
      isScrollViewDisabled={false}
      header={
        <Header
          containerStyle={styles.header}
          title={title}
          leftIconName="ChevronLeft"
          iconHeight={size.rg}
          iconWidth={size.rg}
          leftPress={onPress}
        />
      }
      headerStyle={styles.headerContainer}>
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

      <TextInput
        type="regular"
        value={promo}
        onChangeText={setPromo}
        placeholder="Promo Code"
        containerStyle={styles.textInput}
        rightButton="Apply"
        rightButtonStyle={styles.rightButton}
      />

      <View style={styles.billContainer}>
        {oderSummary.map(item => (
          <View key={item.id}>
            <View style={styles.billItemContainer}>
              <Text style={styles.text}>{item.text}</Text>
              {checkIfLastItemOfArray(oderSummary, item.id) && (
                <Text> ({itemCount} items)</Text>
              )}
              <View style={styles.rightColumn}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.symbol}>USD</Text>
              </View>
            </View>
            {!checkIfLastItemOfArray(oderSummary, item.id) && (
              <View style={styles.divider}></View>
            )}
          </View>
        ))}
      </View>

      <Button title="CHECKOUT" containerStyle={styles.button} />
    </Container>
  );
};
