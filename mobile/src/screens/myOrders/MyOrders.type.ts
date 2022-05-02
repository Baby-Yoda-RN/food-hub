import { TOrder } from "../../types/data"

export type TMyOrdersScreen = {

}

export type TMyOrdersScreenView = {
  upcomingOrders?:Array<TOrder>,
  lastOrders?:Array<TOrder>
}