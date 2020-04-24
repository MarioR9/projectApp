import React from 'react'
import Events from './events.js'

export default class Main extends React.Component{

   render(){
       return(
           <div className="main">
               <Events events={this.props.events}/>
               
           </div>
       )
   }
}