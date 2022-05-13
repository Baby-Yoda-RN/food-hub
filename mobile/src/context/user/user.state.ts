import { TUserState } from '../user/user.type';

export const userInitialState: TUserState = {
  name: '',
  email: '',
  image: 'https://i.imgur.com/imwXQ08.png',
  address: {
    street: '',
    city: '',
    state: '',
    zipcode: 0
  },
  phone: ''
}