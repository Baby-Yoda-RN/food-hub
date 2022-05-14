import { DrawerNavigationProp } from "@react-navigation/drawer"
import { Dispatch, SetStateAction } from "react"
import { TDrawerNavigationRoutes } from "../../navigation/drawer/DrawerNavigation.type"
import { TFoodCategory, TFoodItem, TRestaurant } from "../../types/data"

export type THomeScreenNavigation = {
  navigation: DrawerNavigationProp<TDrawerNavigationRoutes>
}

export type THomeData = {
  categories?: Array<TFoodCategory>
  restaurant?: Array<TRestaurant>
  popularItems?: Array<TFoodItem>
}

export type THomeScreenView = {
  featuredRestaurants:Array<TRestaurant> | undefined
  popularItems:Array<TFoodItem> | undefined
  categories:Array<TFoodCategory> | undefined
  onPressViewAll?:()=> void
  onPressRestaurantCard:(id:string)=> void
  onPressFoodCard:(id:string)=> void
  categoryState:[string|null, Dispatch<SetStateAction<string>>]
  leftPress: () => void
  isLoading?:boolean
}

export type TGetItemId = (id:string) => void