import {io} from "socket.io-client"
import Layout from "./Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import ChatRoom from "./pages/ChatRoom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<HomePage/>},
      {path:'/chatroom',element:<ChatRoom/>},
      {path:'/profile',element:<UserProfile/>},
    ]
  },
]);

function App() {
  const socket = io('http://localhost:5173/')  

  return (
  
    <RouterProvider router={router} />

  )
}

export default App
