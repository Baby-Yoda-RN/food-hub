import React, { FC } from 'react'
import { TMyOrdersScreen } from './MyOrders.type'
import { MyOrdersView } from './MyOrders.view'

export const MyOrders:FC<TMyOrdersScreen> = () => {
  return (
    <MyOrdersView/>
  )
}
