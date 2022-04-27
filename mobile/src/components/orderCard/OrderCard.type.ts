import { TOrder } from "../../types/data";

export type TOrderCard = {
  order:TOrder,
  handleLeftButton?:()=>{}
  handleRightButton?:()=>{}
  leftButtonTitle?:string
  rightButtonTitle?:string
}