export type TRequestBody = {
    token: string
}

export type TAddress = {
   name: string, 
   phoneNumber: string,
   state: string,
   city: string,
   street: string,
}

export type TResponseBody = {
    email: string,
    name: string,
    token: string
}
