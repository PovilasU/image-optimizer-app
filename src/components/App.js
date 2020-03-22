/* eslint-disable no-console */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar.js';
import Home from './Home.js';
import About from './About.js';
import Galllery from './Gallery/Gallery.js';
import Galllery2 from './Gallery/Gallery2.js';
import Galllery3 from './Gallery/Gallery3.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Galllery} />
            <Route path="/gallery2" component={Galllery2} />
            <Route path="/gallery3" component={Galllery3} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

var a = 3;
