import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import JoesKitchen from './screens/JoesKitchen';
import VibeTune from './screens/VibeTune';
import AboutMe from './screens/AboutMe';
import Home from './screens/Home';
import Fixify from './screens/Fixify';
import NoMatch from './screens/NoMatch';
import Contact from './screens/Contact';

import './styles/styles.css'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div id="app-content">
        <NavBar /> 
          <div id="router-content">
            <Switch>
              <Route exact path="/"  component={Home} />
              <Route exact path="/fixify"  component={Fixify} />
              <Route exact path="/joeskitchen"  component={JoesKitchen} />
              <Route exact path="/vibetune"  component={VibeTune} />
              <Route exact path="/aboutme" component={AboutMe} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;