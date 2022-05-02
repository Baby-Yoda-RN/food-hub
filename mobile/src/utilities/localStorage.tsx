import {AsyncStorage} from '@react-native-async-storage/async-storage';
import React, {FC} from 'react';
import {TlocalStorageProps} from './localStorage.type';

export const getData: FC<TlocalStorageProps> = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (typeof value === 'object') {
      return JSON.parse(value);
    }
    return value;
  } catch (error) {
    console.log(error);
  }
};

export const storeData: FC<TlocalStorageProps> = async (key, value) => {
  try {
    if (typeof value === 'object') {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } else {
      await AsyncStorage.setItem(key, value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeData: FC<TlocalStorageProps> = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
