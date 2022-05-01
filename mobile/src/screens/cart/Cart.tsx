import React, {FC, useState, Dispatch} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TCartNavigation} from './Cart.type';
import {CartScreenView} from './Cart.view';
import {TListItem, TListItemArray} from '../../types/data';

export const CartScreen: FC<TCartNavigation> = ({navigation}) => {
  const [listItemArray, setListItemArray] = useState<TListItemArray>([
    {
      id: 0,
      title: 'Salad',
      subTitle: 'Lettuce, Anchovies, Ranch',
      image: 'https://i.imgur.com/Ux2NUdg.jpg',
      price: 7.99,
      quantity: 1,
    },
    {
      id: 1,
      title: 'Pizza',
      subTitle: 'Pinnaple, Pepperoni',
      image: 'https://i.imgur.com/vRxiT35.jpg',
      price: 19.99,
      quantity: 1,
    },
  ]);

  const handleDelete = (
    listItemArray: TListItemArray,
    listItem: TListItem,
    setListItemArray: Dispatch<TListItemArray>,
  ) => {
    setListItemArray(listItemArray.filter(item => item.id !== listItem.id));
  };

  const handleIncrement = (
    listItemArray: TListItemArray,
    listItem: TListItem,
    setListItemArray: Dispatch<TListItemArray>,
  ) => {
    setListItemArray(
      listItemArray.map(item => {
        if (listItem.id === item.id)
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        return item;
      }),
    );
  };

  const handleDecrement = (
    listItemArray: TListItemArray,
    listItem: TListItem,
    setListItemArray: Dispatch<TListItemArray>,
  ) => {
    setListItemArray(
      listItemArray.map(item => {
        if (listItem.id === item.id && item.quantity > 0)
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        return item;
      }),
    );
  };

  return (
    <CartScreenView
      title="Cart"
      onPress={() => navigation.navigate(EAppNavigationRoutes.REVIEW)}
      listItemArray={listItemArray}
      setListItemArray={setListItemArray}
      handleDelete={handleDelete}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
};
