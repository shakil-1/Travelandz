import { createBrowserRouter } from "react-router-dom";
import App from "../components/Home/App";
import Main from "../Main/Main";
import Travelplan from "../components/Travelplan/Travelplan/Travelplan";

const Router = createBrowserRouter([
{
  path:'/',
  element:<Main/>,
  children:[
    {
      path:'/',
      element:<App/>,
    },
    {
      path:'/travelplan',
      element:<Travelplan/>
    }
    
  ]
}
])

export default Router;