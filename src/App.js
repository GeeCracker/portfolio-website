import React from 'react';

import Landing from './components/Landing';
import About from './components/About';

import { Route, BrowserRouter as Router, useLocation, Switch } from "react-router-dom";

function App() {
  return (
    
    <Router>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio-website" component={Landing} />
      </Switch>

    </Router>
  );
}

export default App;
