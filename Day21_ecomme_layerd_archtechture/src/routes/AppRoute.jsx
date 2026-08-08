import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicRoute from './ProtectedRoutes/PublicRoute'
import AuthLayout from '../app/layout/AuthLayout'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import MainRoute from './ProtectedRoutes/MainRoute'
import MainLayout from '../app/layout/MainLayout'
import HomePage from '../shared/ui/pages/HomePage'
import CartPage from '../features/cart/ui/pages/CartPage'
import ProductsPage from '../features/products/ui/pages/ProductsPage'
import OrderPage from '../features/orders/ui/pages/OrderPage'
// import { hydrateUser } from '../features/auth/api/AuthApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/authSlice'
import { hydrateUserAction } from '../features/auth/state/authAction'
import AboutPage from '../shared/ui/pages/AboutPage'

const AppRoute = () => {
    const dispatch = useDispatch()

 
 useEffect(() => {
    (() => {
      try {
        dispatch(hydrateUserAction());
      } catch (error) {
        console.log("error in hydration..", error);
      }
    })();
  }, []);

   




    const route = createBrowserRouter([
        {
            path:"/",
            element:<PublicRoute/>,
            children:[
                {
                    path:'',
                    element:<AuthLayout/>,
                    children:[
                        {
                            path:'',
                            element:<LoginPage/>,
                        },
                        {
                            path:'register',
                            element:<RegisterPage/>,
                        },
                    ],
                },
            ],
        },
        {
            path:"/main",
            element:<MainRoute/>,
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<HomePage/>,
                        },
                        {
                            path:"cart",
                            element:<CartPage/>,

                        },
                        {
                            path:"about",
                            element:<AboutPage/>,

                        },
                        {
                            path:'product',
                            element:<ProductsPage/>,
                        },
                        {
                            path:'order',
                            element:<OrderPage/>,
                        },
                    ]
                }
            ]
        }
    ])
  return <RouterProvider router={route}/>
}

export default AppRoute