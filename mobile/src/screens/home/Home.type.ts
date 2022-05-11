import { DrawerNavigationProp } from "@react-navigation/drawer"
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
  onPressViewAll?:()=> any
  onPressRestaurantCard:(id:string)=>any
  onPressFoodCard:(id:string)=> any
  categoryState:any
  leftPress: () => void
}

export type TGetItemId = (id:string) => any