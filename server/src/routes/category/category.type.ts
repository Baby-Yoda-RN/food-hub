export type TRequestBody = {
    token: string
}

export type TCategory = {
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

export type TCategoryList = Array<TCategory>