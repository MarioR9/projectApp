import React from 'react'
import { Card,Button , CardDeck, Container, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  onChange = date => this.setState({ date })
   render(){
       return(
           <div className="container-event">

            <Container fluid>
              <Row>
                <Col>
               <h2>Proximos eventos</h2>
               {this.props.events.map(event => 
                      <CardDeck key={event.id}>
                      <Card >
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
                <div>
                <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
                  
                />
                {console.log(this.state.date)}
                </div>
                </Col>
              </Row>
            </Container>
            
           </div>
       )
   }
}
