export type TRequestBody = {
    email: string,
    password: string
    token: string
}


export type TCategory = {
    value: string,
    image: string,
}

export type TRestaurant = {
    uuid: string,
    name: string,
    rating: number,
    usersVoted: number,
    favorite: boolean,
    freeDelivery: string,
    deliveryTime: number,
    items: Array<string>,
    imageName: string,
    logo?: string,
}

export type TPopularItem = {
    uuid: string,
    name: string,
    description: string,
    rating: number,
    usersVoted: number,
    price: number,
    favorite: boolean,
    imageName: string,
    addOns?: Array<{
        id: string,
        name: string,
        price: number,
        image: string,
        selected: boolean
    }>,
}

export type TResponseBody = {
    message: string
}


export type TCategoryList = Array<TCategory>
export type TRestaurantList = Array<TRestaurant>
export type TPopularItemList = Array<TPopularItem>