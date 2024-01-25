import { createBrowserRouter } from "react-router-dom";
import App from "../components/Home/App";
import Main from "../Main/Main";
import Travelplan from "../components/Travelplan/Travelplan/Travelplan";
import Contact from "../components/Home/Contact/Contact";
import Slider from "../components/Home/Slider/Slider";

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
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/slider',
      element:<Slider/>
    },
    
  ]
}
])

export default Router;