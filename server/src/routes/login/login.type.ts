
export type TPassword = string;

export type TUserInfo = {
    name: string,
    email: string,
    image: string,
    address: {
        street: string,
        city: string,
        state: string,
        zipcode: number
    },
    phone: string,
    token: string
}