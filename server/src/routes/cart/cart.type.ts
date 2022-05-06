export type TRequestBody = {
    token: string
}

export type TCart = {
    uuid: string,
    name: string,
    description: string,
    imageName: string,
    price: number,
    quantity: number,
}

export type TResponseBody = {
    email: string,
    name: string,
    token: string
}

export type TCartList = Array<TCart>