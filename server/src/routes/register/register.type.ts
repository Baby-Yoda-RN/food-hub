export type TRequestBody = {
    name: string,
    email: string,
    password: string
}

export type TUserInfo = {
    name: string,
    email: string,
    password: string,
    token: string
}

export type TResponseBody = {
    email: string,
    name: string,
    token: string
}