import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap';
import Event from './event.js'

export default class Events extends React.Component{
  
    render(){
        return(
            <div>
                <h1>Events</h1>

                <CardDeck>
                {this.props.events.map(event => 
                      <Card key={event.id} style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={event.images} />
                      <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                          <Card.Text>
                          {event.description}
                          </Card.Text>
                          <Card.Text>
                          {event.location}
                          </Card.Text>
                          <Button onClick={()=>{console.log("CLicked")}} variant="primary">Go somewhere</Button>
                      </Card.Body>
                      </Card>
                    
                )}
                
                </CardDeck>

            
            </div>
        )
    }
}
