import {Dispatch} from 'react';
import {TAppNavigation} from '../../navigation';
import {TListItem, TListItemArray} from '../../types/data';

export type THandleGeneric = (
  listItemArray: TListItemArray,
  listItem: TListItem,
  setListItemArray: Dispatch<TListItemArray>,
) => void;

export type TOrderSummary = Array<{id: number; text: string; price: number}>;

export type TCartScreenViewProps = {
  title: string;
  onPress: () => void;
  listItemArray: TListItemArray;
  setListItemArray: Dispatch<TListItemArray>;
  subTotal: number;
  tax: number;
  delivery: number;
  total: number;
  itemCount: number;
  handleDelete: THandleGeneric;
  handleIncrement: THandleGeneric;
  handleDecrement: THandleGeneric;
  promo: string;
  setPromo: Dispatch<string>;
};

export type TCartNavigation = {
  navigation: TAppNavigation;
};
