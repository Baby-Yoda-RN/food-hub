export type TRequestBody = {
    email: string,
    password: string
}

export type TUserInfo = {
    email: string,
    password: string,
    token: string
}

export type TResponseBody = {
    email: string,
    name: string,
    token: string
}