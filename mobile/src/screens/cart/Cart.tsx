import React, {FC, useState, useEffect} from 'react';
import {TCartNavigation, THandleGeneric} from './Cart.type';
import {CartScreenView} from './Cart.view';
import {TListItemArray} from '../../types/data';
import {foodDummyData} from './foodDummyData';
import {roundToTwoDecimals} from '../../utilities/';
import {foodHubAPI} from '../../config';
import { EAppNavigationRoutes } from '../../navigation/appNavigation/AppNavigation.type';

export const CartScreen: FC<TCartNavigation> = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [listItemArray, setListItemArray] =
    useState<TListItemArray>(foodDummyData);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [delivery, setDelivery] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [itemCount, setItemCount] = useState<number>(0);
  const [promo, setPromo] = useState<string>('');

  const taxRate: number = 0.08;
  const deliveryRate: number = 0.05;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await foodHubAPI.get('/cart');
      setListItemArray(response.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    const subTotal = listItemArray?.reduce(
      (previous, current) => current.price * current.quantity + previous,
      0,
    );
    const tax = roundToTwoDecimals(subTotal * taxRate);
    const delivery = roundToTwoDecimals(subTotal * deliveryRate);
    const total = roundToTwoDecimals(subTotal + tax + delivery);
    const itemCount = listItemArray?.reduce(
      (previous, current) => current.quantity + previous,
      0,
    );

    setSubTotal(roundToTwoDecimals(subTotal));
    setTax(tax);
    setDelivery(delivery);
    setTotal(total);
    setItemCount(itemCount);
  }, [listItemArray]);

  const handleDelete: THandleGeneric = (
    listItemArray,
    listItem,
    setListItemArray,
  ) => {
    setListItemArray(
      listItemArray?.filter(item => item.uuid !== listItem.uuid),
    );
  };

  const handleIncrement: THandleGeneric = (
    listItemArray,
    listItem,
    setListItemArray,
  ) => {
    setListItemArray(
      listItemArray?.map(item => {
        if (listItem.uuid === item.uuid)
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        return item;
      }),
    );
  };

  const handleDecrement: THandleGeneric = (
    listItemArray,
    listItem,
    setListItemArray,
  ) => {
    setListItemArray(
      listItemArray?.map(item => {
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
      isLoading={isLoading}
      title="Cart"
      pressGoBack={() => navigation.goBack()}
      pressCheckOut={() => navigation.navigate(EAppNavigationRoutes.MYORDERS)}
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
      promo={promo}
      setPromo={setPromo}
    />
  );
};
