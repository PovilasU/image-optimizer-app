import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import NavigationBar from './NavigationBar.js';

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
