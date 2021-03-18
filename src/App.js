import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import Home from './screens/Home/Home';
import CreateBlog from './screens/CreateBlog/CreateBlog';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />

      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={CreateBlog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
