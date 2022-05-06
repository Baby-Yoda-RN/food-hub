export type TRequestBody = {
    token: string,
}

export type TOrder = {
    delivered: boolean,
    restaurantImage: string,
    estimatedTime: string,
    total: string,
}

export type TResponseBody = {
    email: string,
    name: string,
    token: string
}

export type TOrderList = Array<TOrder>