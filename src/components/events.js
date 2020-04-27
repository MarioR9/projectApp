import React from 'react'
import { CardDeck } from 'react-bootstrap';

export default class Events extends React.Component{
  
    render(){
        return(
            <div>
                <h1>Events</h1>

                <CardDeck>
                {this.props.events.map(event => 
                  <div className="card" key={event.id}>
                  <img className="card-img" src={event.images}  alt="Card image"/>
                  <div className="card-img-overlay">
                      <p className="card-text">{event.description}</p>
                  </div>
                    </div>
                )}
                
                </CardDeck>

            
            </div>
        )
    }
}
