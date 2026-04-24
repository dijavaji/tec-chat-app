import LayoutBasic from "../layouts/LayoutBasic";
import LayoutHome from "../layouts/LayoutHome";
//paginas
import NotFound from "../pages/ui/NotFound";

import AboutComponent from '../components/ui/AboutComponent';
import ClientComponent from '../components/ui/ClientComponent';
import ContactComponent from '../components/ui/ContactComponent';
import AvatarComponent from '../components/ui/AvatarComponent';
import Login from '../components/Auth/LoginComponent';
import RegisterComponent from '../components/Auth/RegisterComponent';

import IntentComponent from '../components/IntentComponent';
import IntentDetailComponent from '../components/IntentDetailComponent';
import FileUploadComponent from '../components/FileUploadComponent';
import UrlUploadComponent from '../components/UrlUploadComponent';
import ChatPage from '../pages/ChatPage';
import IntentsPage from '../pages/IntentsPage';
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import UserPage from "../pages/UserPage";
import BannerPage from "../pages/ui/BannerPage";
import PricePage from "../pages/ui/PricePage";

//import {ReportPage, ReportUserPage } from "../pages/ReportPage";

const routes=[
  {
    path:"/",
    component:BannerPage,
    exact: true,
    layout: LayoutBasic
  },
  {
    path:"/home",
    component:BannerPage,
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
    path:"/precios",
    component:PricePage,
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
    path:"/contacto",
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
    component:Auth,
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
    path:"/menu",
    component:Home,
    exact: true,
    layout: LayoutHome,
    private:true
  },
  {
    path:"/intents",
    component:IntentsPage,
    layout: LayoutHome,
    private:true
  },
  {
    path:"/add-intent",
    component:IntentComponent,
    layout: LayoutHome,
    private:true
  },
  {
    path:"/edit-intent/:id",
    component:IntentDetailComponent,
    layout: LayoutHome,
    private:true
  },
  {
    path:"/file-upload",
    component:FileUploadComponent,
    layout: LayoutHome,
    private:true
  },
  {
    path:"/chat",
    component:ChatPage,
    layout: LayoutHome,
    private:true
  },
  {
    path:"/url-upload",
    component:UrlUploadComponent,
    layout: LayoutHome,
    private:true
  },
  {
    path:"/user/:username",
    component:UserPage,
    exact: true,
    layout: LayoutHome,
    private:true
  },
  {
    path:"*",
    component:NotFound,
    layout: "LayoutHome"
  }
]

export default routes;
