componentDidMount(){
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : '2854741097907041',
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
    window.FB.login(function(response) {
      console.log(response)
    }, { scope: 'email', 
        return_scopes: true});
  }

  handleLogout=()=>{
    window.FB.logout(function(response){
      
    });
  }