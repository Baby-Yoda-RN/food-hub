export type TStoreToken<T> = (key: T, value: T) => void;

export type TGetToken<T> = (key: T) => Promise<T | undefined>;

export type TRemoveToken<T> = (key: T) => void;

export enum ELocalStorage {
    TOKEN_KEY = 'TOKEN_KEY',
}