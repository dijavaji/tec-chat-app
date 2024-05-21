import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
//import Home from './pages/Home';
import BannerComponent from './components/ui/BannerComponent';
import AboutComponent from './components/ui/AboutComponent';
import ClientComponent from './components/ui/ClientComponent';
import ContactComponent from './components/ui/ContactComponent';
import NotFoundComponent from './components/ui/NotFoundComponent';
import AvatarComponent from './components/ui/AvatarComponent';
import Login from './components/Auth/LoginComponent';

import LayoutBasic from "./layouts/LayoutBasic";

const App = () => {

  return (
    <Router>
          <Switch>
            {/*<Route exact path="/precio" component={Pricing}/>*/}
            <Route exact path="/" render={() => (<LayoutBasic> <BannerComponent/> </LayoutBasic>) } />
            <Route path="/servicios" render={() => (<LayoutBasic><AboutComponent/> </LayoutBasic>) }/>
            <Route path="/clientes" render={() => (<LayoutBasic> <ClientComponent/></LayoutBasic>) }/>
            <Route path="/contactos" render={() => (<LayoutBasic> <ContactComponent/></LayoutBasic>) }/>
            <Route path="/avatar" render={() => (<LayoutBasic> <AvatarComponent/></LayoutBasic>) }/>
            <Route path="/login" render={() => (<LayoutBasic> <Login/></LayoutBasic>)} />
            <Route path="*" component={NotFoundComponent} />
          </Switch>
    </Router>
 );
}

export default App;
