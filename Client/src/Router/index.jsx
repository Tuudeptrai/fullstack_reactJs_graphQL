import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErorrPage from "../pages/ErorrPage";

const AuthLayout = () => {
  return  <AuthProvider><Outlet/></AuthProvider> 
}

export default createBrowserRouter([
    {
        element:<AuthLayout/>,
        errorElement: <ErorrPage/>,
        children:[
            {
                element: <Login/>,
                path: '/login',
            },
            {
                element: <ProtectedRoute/>,
                children: [
                    {
                        element: <Home/>,
                        path: '/',
                    }
                ],
            },
            
          

        ]
    }
])