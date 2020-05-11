import React from 'react'
import Events from './events.js'
import Categories from './categories.js'

import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {events: []};
      }
    
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
            this.setState({events: data})
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
                < Categories/>
                </Col>
                <Col>
                <Events events={this.state.events}/>
                </Col>
              </Row>
            </Container>
            
           </div>
       )
   }
}