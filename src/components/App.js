import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Toolbar from "./Toolbar/Toolbar";
// import Homepage from "./homepage/homepage";
import Services from "./services/services";
import About from "./about/about";
import Pricing from "./pricing/pricing";
import Contact from "./contact/contact";
import AddBookingForm from "./Bookings/addBookingForm";




function App() {
  return (
    <Router>
    <div className="App">
      <Toolbar/>
        <main>
          <Switch>
          {/* <Route path="/" component={Homepage} />  */}
          <Route path="/about" component={About} /> 
          <Route path="/services" component={Services} /> 
          <Route path="/pricing" component={Pricing} /> 
          <Route path="/contact" component={Contact} /> 
          <Route path="/booking" component={AddBookingForm} />
        </Switch>
        </main>
    </div>
    </Router>

  );
}

export default App;
