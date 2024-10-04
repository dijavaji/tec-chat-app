import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {map} from "lodash";

export default function Navigation(props) {
  const routes = props.routes;
  return (
    <Router>
      <Switch>
        {map(routes,(route,index)=>(
          <Route key={index} path={route.path} exact={route.exact}
            render={(props) =>(
              <route.layout>
                <route.component {...props}/>
              </route.layout>
            )}
          />
        ))
        }
      </Switch>
    </Router>
  );
}
