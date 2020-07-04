import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
  return (
    <div className="bg-black">
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route exact path="/">
            <Redirect to="/menu" />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
