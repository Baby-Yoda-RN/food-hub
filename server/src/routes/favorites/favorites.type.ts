export type TRequestBody = {
    token: string
}

export type TFavorites = {
    uuid: string,
    name: string,
    description: string,
    rating: number,
    usersVoted: number,
    price: number,
    favorite: true,
    imageName: string,
}

export type TResponseBody = {
    email: string,
    name: string,
    token: string
}

export type TFavoritesList = Array<TFavorites>