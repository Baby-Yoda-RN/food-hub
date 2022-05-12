import { DrawerNavigationProp } from "@react-navigation/drawer"
import { Dispatch, SetStateAction } from "react"
import { TDrawerNavigationRoutes } from "../../navigation/drawer/DrawerNavigation.type"
import { TFoodCategory, TItem, TRestaurant } from "../../types/data"

export type THomeScreenNavigation = {
  navigation: DrawerNavigationProp<TDrawerNavigationRoutes>
}

export type THomeData = {
  categories?: Array<TFoodCategory>
  restaurant?: Array<TRestaurant>
  popularItems?: Array<TItem>
}

export type THomeScreenView = {
  featuredRestaurants:Array<TRestaurant> | undefined
  popularItems:Array<TItem> | undefined
  categories:Array<TFoodCategory> | undefined
  onPressViewAll?:()=> void
  onPressRestaurantCard:(id:string)=> void
  onPressFoodCard:(id:string)=> void
  categoryState:[string|null, Dispatch<SetStateAction<string|null>>]
  leftPress: () => void
}

export type TGetItemId = (id:string) => void