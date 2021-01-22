import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/index';

import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Schedule from './component/Schedule';
import Team_J from './component/team/Team_J';
import Team_K from './component/team/Team_K';
import Team_T from './component/team/Team_T';
import Academy from './component/team/Academy';
import Package from './component/team/Package';

function App() {
  return (
    <Provider store={store}>
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
          <Route path="/jkt48-theater-7-show-package" component={Package} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
