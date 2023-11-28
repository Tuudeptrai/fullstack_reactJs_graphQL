import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErorrPage from "../pages/ErorrPage";
import NoteList from "../components/NoteList";
import Note from "../components/Note";
import { notesLoader } from "../utils/noteUtils";
import { folderLoader } from "../utils/folderUtils";
import { noteLoader } from "../utils/notedetailUtils";

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
            loader: folderLoader ,
            children: [
              {
                element: <NoteList />,
                path: 'folders/:folderId',
                loader: notesLoader,
                children: [
                  {
                    element: <Note />,
                    path: 'note/:noteId', 
                    loader: noteLoader,
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
