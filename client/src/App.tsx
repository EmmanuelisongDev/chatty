
import Layout from "./Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import ChatRoom from "./pages/ChatRoom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";

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


  return (
  
    <RouterProvider router={router} />

  )
}

export default App
