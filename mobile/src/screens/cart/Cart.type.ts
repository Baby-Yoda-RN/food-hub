import { StackScreenProps } from '@react-navigation/stack';
import { Dispatch } from 'react';
import { TAppNavigationRoutes, EAppNavigationRoutes, TAppNavigation } from '../../navigation';
import { TListItem, TListItemArray } from '../../types/data';

export type TCartScreenProps = StackScreenProps<TAppNavigationRoutes, EAppNavigationRoutes.CART>;

export type TCartScreenViewProps = {
    title: string;
    onPress: () => void;
    listItemArray: TListItemArray;
    setListItemArray: any;
    handleDelete: (
        listItemArray: TListItemArray,
        listItem: TListItem,
        setListItemArray: Dispatch<TListItemArray>
    ) => void;
    handleIncrement: (
        listItemArray: TListItemArray,
        listItem: TListItem,
        setListItemArray: Dispatch<TListItemArray>) => void;
    handleDecrement: (
        listItemArray: TListItemArray,
        listItem: TListItem,
        setListItemArray: Dispatch<TListItemArray>
    ) => void;
};

export type TCartNavigation = {
    navigation: TAppNavigation
};