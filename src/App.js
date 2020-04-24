import React from 'react';
import './App.css';
import Main from './components/main.js'
import NavBar from './components/navigation.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {events: []};
  }

  componentDidMount=()=>{
    fetch('http://localhost:3000/api/v1/events', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        this.setState({events: data})
        debugger
        })
        .catch((error) => {
        console.error('Error:', error);
        });
  }


  render(){
   
    return (
    <div >
      <NavBar/>
      <div>
        <Main events={this.state.events}/>
      </div>
      </div>
    
  );
  }
}

