import React, { Fragment } from 'react';
import { Component } from 'react';

import Landing from './components/Landing';

// work pages
import WorkTemp from './components/work-pages/WorkTemplate';
import Cram from './components/work-pages/CramWork';
import Journo from './components/work-pages/JournoWork';
import Loop from './components/work-pages/LoopWork';
import Olae from './components/work-pages/OlaeWork';
import Wob from './components/work-pages/WobWork';

import { Route, BrowserRouter as Router, useLocation, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio-website" component={Landing} />

        <Route path="/work/loop" component={Loop} />
        <Route path="/work/crambarry" component={Cram} />
        <Route path="/work/journo" component={Journo} />
        <Route path="/work/olae" component={Olae} />
        <Route path="/work/wob" component={Wob} />
      </Switch>
    </Router>
  );
}

export default App;
