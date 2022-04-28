import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';

export type TLogin = NativeStackScreenProps<RootStackParams, 'Login'>;

export type TLoginView = {
    press: () => void;
}