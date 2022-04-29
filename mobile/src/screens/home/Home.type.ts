export type THomeScreen = {
}

export type THomeScreenView = {
  featuredRestaurants:Array<Object>
  popularItems:Array<Object>
  onPressViewAll?:()=> any
  onPressRestaurantCard:(id:string)=>any
  onPressFoodCard:(id:string)=> any
}

export type TGetItemId = (id:string) => any