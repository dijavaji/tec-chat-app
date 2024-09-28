import React from "react";

//import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./routes/Navigation";

{/*<Router>
      <Switch>
        <Route exact path="/precio" component={Pricing}/>
        <Route exact={true} path="/" render={() => (<LayoutBasic> <BannerComponent/> </LayoutBasic>) } />
        <Route path="/servicios" render={() => (<LayoutBasic><AboutComponent/> </LayoutBasic>) }/>
        <Route path="/clientes" render={() => (<LayoutBasic> <ClientComponent/></LayoutBasic>) }/>
        <Route path="/contactos" render={() => (<LayoutBasic> <ContactComponent/></LayoutBasic>) }/>
        <Route path="/avatar" render={() => (<LayoutBasic> <AvatarComponent/></LayoutBasic>) }/>
        <Route path="/login" render={() => (<LayoutBasic> <Login/></LayoutBasic>)} />
        <Route path="/profile" render={() => (<LayoutBasic> <Home/></LayoutBasic>)} />
        <Route path="/register" render={() => (<LayoutBasic> <RegisterComponent/></LayoutBasic>)} />
        <Route path="*" component={NotFound} />
      </Switch>
</Router>*/}

const App = () => {

  return (
    <Navigation/>
 );
}

export default App;
