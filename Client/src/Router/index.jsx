import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErorrPage from "../pages/ErorrPage";
import NoteList from "../components/NoteList";
import Note from "../components/Note";

const AuthLayout = () => {
  return <AuthProvider><Outlet/></AuthProvider>
}

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErorrPage />,
    children: [
      {
        element: <Login />,
        path: '/login',
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: '/',
            children: [
              {
                element: <NoteList />,
                path: '/folders/:folderId',
                children: [
                  {
                    element: <Note />,
                    path: 'note/:nodeId',  // Adjusted to relative path
                  }
                ],
              }
            ],
          }
        ],
      },
    ]
  }
]);
