import { Dispatch, SetStateAction } from "react"
import { TOrder } from "../../types/data"

export type TMyOrdersScreen = {

}

export type TMyOrdersScreenView = {
  upcomingOrders?:Array<TOrder>,
  lastOrders?:Array<TOrder>
  showUpcomingOrders?:boolean
  setShowUpcomingOrders?:Dispatch<SetStateAction<boolean>>
}