import "./App.css";
import React, { Suspense } from "react";
import routeMap from "./routeMap";
import {
  Redirect,
  Link,
  Switch,
  HashRouter as Router,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/page-a">PageA</Link>
        </li>
        <li>
          <Link to="/page-b">PageB</Link>
        </li>
      </ul>
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          <Redirect exact form="/" to="/page-a" />
          {routeMap.map((item) => {
            return (
              <Route
                exact
                key={item.path}
                path={item.path}
                component={item.component}
              />
            );
          })}
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
