import React from 'react';
import './App.css';
import Main from './components/main.js'
import NavBar from './components/navigation.js'
import { Button } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: '',
      email: '',
      picture:''
    };
  }

  componentDidMount(){
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : '--appId--',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v6.0'
      });
    };
    (function(d, s, id) {                      // Load the SDK asynchronously
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  handleCheck=()=>{
    window.FB.getLoginStatus(function(response) {
      console.log(response)
  });
  }

  handleLogin=()=>{
        window.FB.login((response)=> {
          console.log(response)
          if (response.authResponse) {
           console.log('Welcome!  Fetching your information.... ');
           window.FB.api('/me', {fields: "picture , name, email "}, (resp) =>{
             debugger
             console.log(resp);
             this.setState({name: resp.name})
           });
          } else {
           console.log('User cancelled login or did not fully authorize.');
          }
      });
  }

  handleLogout=()=>{
    window.FB.logout(function(response){
      
    });
  }

  handleModalShow=()=>{
    this.setState({ modalShow: true})
    console.log("modal")
  }

  render(){
   
    return (
    <div >
      <NavBar 
        handleModalShow={this.handleModalShow}
      />
      <Main/>
     
      <Button onClick={this.handleLogin}>
        FB Login
      </Button>
      </div>
    
  );
  }
}

