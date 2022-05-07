import { TData } from "../../components/imageButton/ImageButton.type"
import { TDrawerNavigation } from "../../navigation/appNavigation/drawer/DrawerNavigation.type"

export type THomeScreenNavigation = {
  navigation: TDrawerNavigation
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