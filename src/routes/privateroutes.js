import Home from "../pages/Home";
import NotFound from "../pages/ui/NotFound";
import UserPage from "../pages/UserPage";

import LayoutBasic from "../layouts/LayoutBasic";

const privateroutes =[
  {
    path:"/profile",
    component:Home,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"*",
    component:NotFound,
    layout: LayoutBasic
  }
]

export default privateroutes;
