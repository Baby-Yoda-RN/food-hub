import { Dispatch, SetStateAction } from "react"
import { TAppNavigation } from "../../navigation"
import { TOrder } from "../../types/data"

export type TMyOrdersScreen = {
  navigation: TAppNavigation
}

export type TMyOrdersScreenView = {
  upcomingOrders?:Array<TOrder>,
  lastOrders?:Array<TOrder>
  showUpcomingOrders?:boolean
  setShowUpcomingOrders?:Dispatch<SetStateAction<boolean>>
  leftPress: () => void
}

