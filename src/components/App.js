import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Toolbar from "./Toolbar/Toolbar";
import Homepage from "./homepage/homepage";
import Services from "./services/services";
import About from "./about/about";
import Pricing from "./pricing/pricing";
import Contact from "./contact/contact";




function App() {
  return (
    <div>
      <Router>
      <div className="App">
        <Toolbar/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} /> 
            <Route path="/services" component={Services} /> 
            <Route path="/pricing" component={Pricing} /> 
            <Route path="/contact" component={Contact} /> 
          </Switch>
      </div>
      </Router>
      
    </div>
  );
}

export default App;
