import AsyncStorage from '@react-native-async-storage/async-storage';
import { TStoreToken, TGetToken, TRemoveToken } from './localStorage.type';

export const storeToken: TStoreToken<string> = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

export const getToken: TGetToken<string> = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return value;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const removeToken: TRemoveToken<string> = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
