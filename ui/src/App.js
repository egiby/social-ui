import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import {Login} from './components/Login'
import {Register} from './components/Register'

class App extends Component {
  render() {
    return (
      <div className="base-container">

        <Switch>
          <Route exact path='/' render={() => (<Redirect to='/login'/>)}/>
          <Route exact path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </div>
    );
  }
}

export default App;
