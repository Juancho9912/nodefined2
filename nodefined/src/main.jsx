import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LoginMenu from './components/loginMenu/LoginMenu';


const router = createBrowserRouter([
  {
    path: '/',
    element: <spam>hola mundo</spam>
  },
  {
    path: '/login',
    element: <LoginMenu />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <div className='first-circle'></div>
    <div className='second-circle'></div>
    <div className='third-circle'></div>
  </React.StrictMode>
)
