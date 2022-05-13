import { TUserState } from '../user';

export const userInitialState: TUserState = {
  name: '',
  email: '',
  picture: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipcode: 0
  },
  phone: ''
}