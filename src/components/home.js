import React from 'react'
import Events from './events.js'
import Categories from './categories.js'

import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {events: [], event: " "};
      }
    //fetch all event on load of the page.
    //maybe be better to load on request only. but all at once.
      componentDidMount=()=>{
        fetch('http://localhost:3000/api/v1/events', {
          method: 'GET', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
            })
            .then((response) => response.json())
            .then((data) => {
            console.log('Success:', data);
            this.setState({events: data, event: data[0].deporte}) //respose will set the state for events heading.
            })
            .catch((error) => {
            console.error('Error:', error);
            });
      }
    
   render(){
       return(
           <div className="main">

            <Container fluid>
              <Row>
                <Col>
                <Events events={this.state.events} event={this.state.event}/>
                </Col>
              </Row>
            </Container>
            
           </div>
       )
   }
}
