import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from "./about"
import Login from "./RegisterLogin"

function App() {
  return (
    <div >
      <Switch>
        <Route path="/about" component={About} /> 
        <Route path="/Login" component={Login} /> 

      </Switch>
    </div>
  );
}

export default App;
