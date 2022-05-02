import React, {FC, useState, useEffect, Dispatch} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TCartNavigation, THandleGeneric} from './Cart.type';
import {CartScreenView} from './Cart.view';
import {TListItem, TListItemArray} from '../../types/data';
import {foodDummyData} from './foodDummyData';

export const CartScreen: FC<TCartNavigation> = ({navigation}) => {
  const [listItemArray, setListItemArray] = useState<TListItemArray>(foodDummyData);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [delivery, setDelivery] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [itemCount, setItemCount] = useState<number>(0);

  const taxRate: number = 0.08;
  const deliveryRate: number = 0.05;

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

  const handleDelete: THandleGeneric<
    TListItemArray,
    TListItem,
    Dispatch<TListItemArray>
  > = (listItemArray, listItem, setListItemArray) => {
    setListItemArray(listItemArray.filter(item => item.uuid !== listItem.uuid));
  };

  const handleIncrement: THandleGeneric<
    TListItemArray,
    TListItem,
    Dispatch<TListItemArray>
  > = (listItemArray, listItem, setListItemArray) => {
    setListItemArray(
      listItemArray.map(item => {
        if (listItem.uuid === item.uuid)
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        return item;
      }),
    );
  };

  const handleDecrement: THandleGeneric<
    TListItemArray,
    TListItem,
    Dispatch<TListItemArray>
  > = (listItemArray, listItem, setListItemArray) => {
    setListItemArray(
      listItemArray.map(item => {
        if (listItem.uuid === item.uuid && item.quantity > 0)
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
      subTotal={subTotal}
      tax={tax}
      delivery={delivery}
      total={total}
      itemCount={itemCount}
      handleDelete={handleDelete}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
};
