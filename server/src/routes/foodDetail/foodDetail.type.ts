export type TRequestBody = {
    token: string
}

export type TFoodDetail = {
    name: string,
    rating: number,
    reviewCounts: number,
    price: number,
    description: string,
    choiceOfAddOns: Array<TChoiceOfAddOns>
}

export type TChoiceOfAddOns = {
    name: string,
    price: number,
}

export type TResponseBody = {
    email: string,
    name: string,
    token: string
}