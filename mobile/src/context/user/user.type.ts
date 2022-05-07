export type TUserState = {
  email: string | null
  name: string | null
  phoneNumber: string | null
  address:{
    street:string | null
    city: string | null
    state: string | null
  }
}

export type TUserAction = {
  type:EUserAction
}

export enum EUserAction {

}