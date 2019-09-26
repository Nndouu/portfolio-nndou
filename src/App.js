import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

import "./styles/css/bootstrap.css";
import "./styles/css/style.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <h1 className='text-dark'>Nndou Portfolio</h1>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound} />
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
