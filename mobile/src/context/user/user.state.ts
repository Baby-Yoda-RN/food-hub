import {TUserState} from './user.type'

export const authInitialState:TUserState = {
  email: null,
  name: null,
  phoneNumber: null,
  address: {
    street: null,
    city: null,
    state: null
  }
}