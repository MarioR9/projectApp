import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap';
export default class Events extends React.Component{
    render(){
        return(
            <div>
                <h1>Events</h1>

                <CardDeck>
                {this.props.events.map(event => 
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={event.images} />
                      <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                          <Card.Text>
                          {event.description}
                          </Card.Text>
                          <Card.Text>
                          {event.location}
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                      </Card>
                    
                )}
                
                </CardDeck>

            
            </div>
        )
    }
}
