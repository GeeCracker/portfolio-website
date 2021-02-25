import React from 'react';

import Landing from './components/Landing';
import About from './components/About';

import { Route, BrowserRouter as Router, useLocation, Switch } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    
    <Router>

      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/me" component={Landing} />
        </Switch>
      </AnimatePresence>

    </Router>
  );
}

export default App;
