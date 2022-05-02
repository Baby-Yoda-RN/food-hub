import { Dispatch } from 'react';
import { TAppNavigation } from '../../navigation';
import { TListItem, TListItemArray } from '../../types/data';

export type THandleGeneric<T1, T2, T3> = (
    listItemArray: T1,
    listItem: T2,
    setListItemArray: T3,
) => void;

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
    handleDelete: THandleGeneric<TListItemArray, TListItem, Dispatch<TListItemArray>>;
    handleIncrement: THandleGeneric<TListItemArray, TListItem, Dispatch<TListItemArray>>;
    handleDecrement: THandleGeneric<TListItemArray, TListItem, Dispatch<TListItemArray>>;
};

export type TCartNavigation = {
    navigation: TAppNavigation
};

