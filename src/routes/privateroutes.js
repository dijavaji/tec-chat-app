import Home from "../pages/Home";
import NotFound from "../pages/ui/NotFound";
//import UserPage from "../pages/UserPage";
import BannerComponent from '../components/ui/BannerComponent';

import LayoutBasic from "../layouts/LayoutBasic";

const privateroutes =[
  {
    path:"/",
    component:Home,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"/home",
    component:BannerComponent,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"*",
    component:NotFound,
    layout: LayoutBasic
  },
]

export default privateroutes;
