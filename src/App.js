import React from 'react';
import Login from './layout/Login';
import Home from './layout/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
