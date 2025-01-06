import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {map} from "lodash";

import useAuth from '../hooks/useAuth';

export default function Navigation(props) {
  const routes = props.routes;
  return (
    <Router>
      <Switch>
        {map(routes,(route,index)=>(
          <Route key={index} path={route.path} exact={route.exact}
            render={(props) =>(
              route.private ? <PrivateRoute> <route.layout> <route.component {...props}/> </route.layout> </PrivateRoute>:
              <route.layout> <route.component {...props}/> </route.layout>
            )}
          />
        ))
        }
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ children }) => {
  const {auth} = useAuth();
  //const isAuthenticated = auth === undefined || auth === null;
  console.log("isAuthenticated-----",(auth === undefined || auth === null))
  //const { isAuthenticated } = useAuth();
  return auth ? children : <Redirect to="/" />;
};
