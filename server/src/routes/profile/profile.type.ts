export type TRequestBody = {
    token: string,
}

export type TUserInfo = {
    name: string,
    email: string,
    phoneNumber: string,
    token: string
}

export type TResponseBody = {
    email: string,
    name: string,
    token: string
}