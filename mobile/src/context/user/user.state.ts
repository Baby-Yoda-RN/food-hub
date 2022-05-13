import { TUserState } from '../user';

export const userInitialState: TUserState = {
  name: '',
  email: '',
  image: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipcode: 0
  },
  phone: ''
}