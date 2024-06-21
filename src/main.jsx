import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import { navItems } from './constants';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>Dashboard</div>
        <Outlet />
      </>
    ),
    children: navItems.map(item => {
      return {
        path: item.link,
        element: <Category data={item} />,
      }
    })
    /*
    children: [
      {
        errorElement: <div>Error</div>,
        children: navItems.map(item => {
          return {
            path: item.link,
            element: <Category data={item} />,
          }
        })
      }
    ]
      */
  }
], { basename: "/category"})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
