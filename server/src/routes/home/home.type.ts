import { TPopularItem, TRestaurant } from "../restaurant/restaurant.type"

type TFoodCategory = {
  value:string
  image:string
}

export type THomeList = {
  categories: Array<TFoodCategory>
  restaurant: Array<TRestaurant>
  popularItems: Array<TPopularItem>
}