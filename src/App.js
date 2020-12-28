import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Schedule from './component/Schedule';
import Team_J from './component/team/Team_J';
import Team_K from './component/team/Team_K';
import Team_T from './component/team/Team_T';
import Academy from './component/team/Academy';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/team-j" component={Team_J} />
        <Route path="/team-k" component={Team_K} />
        <Route path="/team-t" component={Team_T} />
        <Route path="/about" component={About} />
        <Route path="/all-schedule" component={Schedule} />
        <Route path="/academy-class-a" component={Academy} />
      </Switch>
    </Router>
  );
}

export default App;
