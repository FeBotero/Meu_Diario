import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from './pages/Home'
import { Diario } from './pages/MyDiary'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      
      {path:"/Diary",element:<Diario/>},
    ]
  }
])

import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { DateProvider } from './context/DateContext'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider >
      <UserProvider>
        <DateProvider>
          <RouterProvider router={router}/>
        </DateProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
