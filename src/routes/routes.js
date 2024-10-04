import LayoutBasic from "../layouts/LayoutBasic";
//paginas
import NotFound from "../pages/ui/NotFound";

import BannerComponent from '../components/ui/BannerComponent';
import AboutComponent from '../components/ui/AboutComponent';
import ClientComponent from '../components/ui/ClientComponent';
import ContactComponent from '../components/ui/ContactComponent';
import AvatarComponent from '../components/ui/AvatarComponent';
import Login from '../components/Auth/LoginComponent';
import RegisterComponent from '../components/Auth/RegisterComponent';

//import SectionPage from "../pages/SectionPage";
//import BalancePage from "../pages/BalancePage";
//import BillPayPage from "../pages/BillPayPage";

//import {ReportPage, ReportUserPage } from "../pages/ReportPage";

const routes=[
  {
    path:"/",
    component:BannerComponent,
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
    path:"/servicios",
    component:AboutComponent,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"/clientes",
    component:ClientComponent,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"/contactos",
    component:ContactComponent,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"/avatar",
    component:AvatarComponent,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"/login",
    component:Login,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"/register",
    component:RegisterComponent,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"*",
    component:NotFound,
    layout: LayoutBasic
  }
]

export default routes;
