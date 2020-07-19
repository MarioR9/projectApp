import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";

import Home from './components/home.js'
import NavBar from './components/navigation.js' //exported component. 

export default class App extends React.Component {
  

  render(){
   
    return (
    <div className="main-screen">
      <div>
      <NavBar/>
      </div>
      <Router>
        <div className='main'>
          <Switch>
            <Route exact path='/'><Redirect to="/home" /></Route>
            <Route path='/home' component={Home}/>
          </Switch>
          </div>
      </Router>
      </div>
    
  );
  }
}

