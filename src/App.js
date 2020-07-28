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

let names;
let deporte;
let href;
export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: "",
      events: []};
  }
  
//fetch all event on load of the page.
//maybe be better to load on request only. but all at once.

  componentDidMount=()=>{
    fetch('http://localhost:3000/api/v1/events', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
        })
        .then((response) => response.json())
        .then((data) => {
        this.setState({events: data}) //respose will set the state for events heading.
        })
  }

  handleCategorySelection=(link)=>{
    names = this.state.events.map(e => e.deporte)
    deporte = [...new Set(names)] //remote duplicate for each deporte..
    href = deporte.find(e => e === link)
    this.setState({currentEvent: href})
  }
  
  render(){
    console.log(this.state.currentEvent)
    return (
      <Router>
      <NavBar events={this.state.events} handleCategorySelection={this.handleCategorySelection}/>
          <Switch>
            <Route exact path='/'><Redirect to="/home" /></Route>
            <Route path='/home'>
            <Home events={this.state.events}/>
            </Route>
            <Route path={`/${this.state.currentEvent}`}>
            <Events events={this.state.events} event={this.state.currentEvent}/>
            </Route>
            <Route path='/noticias'>
            <Noticias events={this.state.events} event={this.state.currentEvent}/>
            </Route>
          </Switch>
      </Router>
  );
  }
}

