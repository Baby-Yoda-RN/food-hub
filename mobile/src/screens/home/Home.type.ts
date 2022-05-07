import { DrawerNavigationProp } from "@react-navigation/drawer"
import { TData } from "../../components/imageButton/ImageButton.type"
import { TDrawerNavigationRoutes } from "../../navigation/drawer/DrawerNavigation.type"

export type THomeScreenNavigation = {
  navigation: DrawerNavigationProp<TDrawerNavigationRoutes>
}

export type THomeScreenView = {
  featuredRestaurants:Array<Object>
  popularItems:Array<Object>
  onPressViewAll?:()=> any
  onPressRestaurantCard:(id:string)=>any
  onPressFoodCard:(id:string)=> any
  categories?:Array<TData>
  categoryState:any
  leftPress: () => void
}

export type TGetItemId = (id:string) => any