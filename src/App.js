import React, {useState, useEffect, useMemo} from "react";

//import "bootstrap/dist/css/bootstrap.min.css";

//componentes
//import Auth from "./pages/Auth";
import {getToken, decodeToken, removeToken} from "./utils/tec-token.util";
import AuthContext from "./context/AuthContext";
import Navigation from "./routes/Navigation";

import routes from "./routes/routes";
import privateroutes from "./routes/privateroutes";

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
  const [auth, setAuth] = useState(undefined);
  //const authData= {name: "admin prueba"};
  useEffect(()=>{
    const token = getToken();
    console.log("ingreso a la aplicacion");
    if(!token){
      setAuth(null);
    }else{
      setAuth(decodeToken(token));
    }
  },[]);

  const logout = () => {
    //console.log("cerrar sesion");
    removeToken();  //elimino token del localStorage
    setAuth(null);  //seteo estado null llevar al registro
  };

  const setUser = (user) =>{
    setAuth(user);
  };

  const authData = useMemo(
    () =>({
      auth,
      logout,
      setUser,
    }),[auth]
  );

  if(auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      {!auth? <Navigation routes={routes}/> : <Navigation routes={privateroutes}/>}
    </AuthContext.Provider>
 );
}

export default App;
