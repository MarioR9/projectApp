import React from 'react';
import './App.css';
import Main from './components/main.js'
import NavBar from './components/navigation.js'
import { Button } from 'react-bootstrap';
import Login from './components/login.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }
  handleModalShow=()=>{
    this.setState({ modalShow: true})
  }

  render(){
   
    return (
    <div >
      <NavBar 
        handleModalShow={this.handleModalShow}
      />
      <Main/>
      <Login
        show={this.state.modalShow}
        onHide={() => this.setState({ modalShow: false})}
      />
    </div>
  );
  }
}

