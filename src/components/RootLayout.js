import React from 'react'
import {NavBar} from './Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export const RootLayout = () => {
  return (
    <div>
        <Provider store={store}>
        <NavBar/>
        <main><Outlet /></main>
        </Provider>
    </div>
  )
}