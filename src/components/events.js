import React from 'react'
import { Button , CardGroup} from 'react-bootstrap';

export default class Events extends React.Component{
  
    render(){
        return(
            <div className="container-event">
                <h1>Events</h1>

                <CardGroup >
                {this.props.events.map(event => 
                  <div className="card" key={event.id}>
                  <img className="card-img" src={event.images}  alt="CardBck"/>
                  <div className="card-img-overlay">
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                    <Button variant="success">Learn more</Button>
                  </div>
                    </div>
                )}
                
                </CardGroup>

            
            </div>
        )
    }
}
