import React from 'react'
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


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider >
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
