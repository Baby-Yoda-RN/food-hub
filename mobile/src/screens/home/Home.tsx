import React, { FC } from 'react'
import { THome } from './Home.type'
import { HomeView } from './Home.view'

export const Home:FC<THome> = () => {
  return (
    <HomeView/>
  )
}
