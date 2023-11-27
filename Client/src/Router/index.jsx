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
            loader: async () =>{
                const query = `query Folders {
                     folders { 
                        id 
                        name 
                        createdAt 
                    } 
                }`; 
                const res = await fetch ('http://localhost:4000/graphql', {
                    method: 'POST',
                    headers :{
                        'Content-Type': 'application/json', 
                        'Accept':'application/json'
                    }, 
                    body: JSON.stringify({query})
                }); 
                    const {data} = await res.json(); 
                    console.log({data}) ;
                    return data;
             
            } ,
            children: [
              {
                element: <NoteList />,
                path: '/folders/:folderId',
                loader: async ({params:{folderId}})=>{
                    console.log('loader', {folderId})
                    const query = `query ExampleQuery($folderId: String) {
                        folder(folderId: $folderId) {
                          id
                          name
                          notes {
                            id
                            content
                          }
                        }
                      }`;
                      const res = await fetch ('http://localhost:4000/graphql', {
                        method: 'POST',
                        headers :{
                            'Content-Type': 'application/json', 
                            'Accept':'application/json'
                        }, 
                        body: JSON.stringify({
                            query,
                            variables:{
                                folderId
                            }
                        })
                    }); 
                        const {data} = await res.json(); 
                        console.log('data',{data}) ;
                        return data;
                },
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
