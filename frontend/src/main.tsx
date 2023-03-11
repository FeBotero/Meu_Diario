import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from './pages/Home'
import { Diario } from './pages/MyDiary'
import { Login } from "./pages/Login/Login"
import { Register } from './pages/Register/Register'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/login",element:<Login/>},
      {path:"/register",element:<Register/>},
      {path:"/diary",element:<Diario/>},
    ]
  }
])

import { ThemeContextProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { DateProvider } from './context/DateContext'
import { GlobalStyle } from './styles/global'





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider >
      <GlobalStyle/>
        <UserProvider>
          <DateProvider>
            <RouterProvider router={router}/>
          </DateProvider>
        </UserProvider>
      
    </ThemeContextProvider>
  </React.StrictMode>,
)
