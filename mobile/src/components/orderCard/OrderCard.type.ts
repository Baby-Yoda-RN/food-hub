import { IOrder } from "../../types/data";

export type TOrderCard = {
  order:IOrder,
  handleLeftButton?:()=>{},
  handleRightButton?:()=>{},
}