import React from 'react'
import { Button , CardGroup, Container, Row, Col } from 'react-bootstrap';

export default class Events extends React.Component{
  
    render(){
        let currentEvent= this.props.events.filter(event => event.deporte === this.props.event)
        return(
            <div className="container-event">
                <h1>{this.props.event}</h1>
                <Container>
                    <Row>
                        <Col>
                  {currentEvent.map(event => 
                        <CardGroup >
                  <div className="card" key={event.id}>
                  <img className="card-img" src={event.images}  alt="CardBck"/>
                  <div className="card-img-overlay">
                    <h1>{event.title}</h1>
                  </div>
                  
                    </div>
                    <Button className="vermas-Btn" variant="success">Ver mas</Button>
                </CardGroup>
                        )}
                        </Col>
                       
                    </Row>
                </Container>
            
            </div>
        )
    }
}
