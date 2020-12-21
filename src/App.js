import React from 'react';
import './App.css';
import Nav from './component/Nav'
import Home from './component/Home'
import About from './component/About'
import Schedule from './component/Schedule'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </Router>
  );
}

export default App;
