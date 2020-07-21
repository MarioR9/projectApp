import React from 'react'
import Events from './events.js'

import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component{
   
   render(){
       return(
           <div className="main">

            <Container fluid>
              <Row>
                <Col>
                <Events events={this.props.events} event={this.props.event}/>
                </Col>
                <Col>
                </Col>
              </Row>
            </Container>
            
           </div>
       )
   }
}
