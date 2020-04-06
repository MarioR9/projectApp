import React from 'react'
import Events from './events.js'

export default class Main extends React.Component{
   
handleUsers=()=>{
    fetch('http://localhost:3000/api/v1/users', {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
          })
          .then((response) => response.json())
          .then((data) => {
          console.log('Success:', data);
          })
          .catch((error) => {
          console.error('Error:', error);
          });
}

   render(){
       return(
           <div class="main">
               <Events/>
               
           </div>
       )
   }
}