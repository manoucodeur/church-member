import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom';
// import {BrowserRouter as Router,
//   Routes,
//   Route,
//   Switch
// } from "react-router-dom";

import Membre from "./Pages/Membre";
import Addmembre from "./Pages/Addmembre";
import Modifiermembre from "./Pages/Modifiermembre";

function App() {

  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Membre} />
          <Route path="/ajouter-membre" component={Addmembre} />
          <Route path="/modifier-membre/:id" component={Modifiermembre} />
      </Switch>
      </Router>
    
  );
}

export default App;
