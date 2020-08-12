import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './components/home.js'
import NavBar from './components/navigation.js' //exported component. 
import Noticias from './components/noticias.js'
import Events from './components/events.js'
import User from './components/user.js'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: "",
      date: new Date(),
      events: [],
      user:[]};
  }
  componentDidMount=()=>{
    fetch('http://localhost:3000/api/v1/events', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
        })
        .then(response=> response.json())
        .then(data => {
        this.setState({events: data, user: data.user}) //respose will set the state for events heading.
        })
  }

  handleCategorySelection=(link)=>{
    this.setState({currentEvent: link})
  }

  render(){
    return (
    <div>
      <Router>
      <NavBar events={this.state.events} handleCategorySelection={()=>this.handleCategorySelection}/>
          <Switch>
            <Route exact path='/'><Redirect to="/home" /></Route>
            <Route path='/home'>
            <Home events={this.state.events}/>
            </Route>
            <Route path={'/events'}>
            <Events events={this.state.events} event={this.state.currentEvent}/>
            </Route>
            <Route path='/noticias'>
            <Noticias events={this.state.events} event={this.state.currentEvent}/>
            </Route>
            <Route path='/user'>
            <User/>
            </Route>
          </Switch>
      </Router>
    </div>
     
  );
  }
}

