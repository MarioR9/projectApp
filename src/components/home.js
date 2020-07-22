import React from 'react'
import { Card,Button , CardDeck, Container, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component{
   
   render(){
       return(
           <div className="main">

            <Container fluid>
              <Row>
                <Col>
               <h2>Proximos eventos</h2>
               {this.props.events.map(event => 
                      <CardDeck>
                      <Card>
                        <Card.Body>
                          <Card.Title>{event.title}</Card.Title>
                          <Card.Text>
                            {event.description}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        <Button variant="primary">Ver mas</Button>
                      </Card>
                    </CardDeck> 
                       )}
                </Col>
                <Col>
                <h2>Utilidades</h2>
                </Col>
              </Row>
            </Container>
            
           </div>
       )
   }
}
