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
  isLoading: boolean
  featuredRestaurants:Array<TRestaurant> | undefined
  popularItems:Array<TFoodItem> | undefined
  categories:Array<TFoodCategory> | undefined
  onPressViewAll?:()=> void
  onPressRestaurantCard:(id:string)=> void
  onPressFoodCard:(id:string)=> void
  categoryState:[string|null, Dispatch<SetStateAction<string>>]
  leftPress: () => void
<<<<<<< HEAD
  deliveryLocation: string
  rightIconLocation: string
=======
  isLoading?:boolean
>>>>>>> 4aa24429cf7292440fcdfa0168e7e55a0718acc0
}

export type TGetItemId = (id:string) => void