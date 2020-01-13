import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from "./about"
import Toolbar from "./Toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <div >
        <Switch>
          <Route path="/about" component={About} /> 
        </Switch>
      </div>
    </div>

  );
}

export default App;
