import React from 'react'
import { Tabs , Tab, Card, Button, Row, Col, Container} from 'react-bootstrap';
import Profile from './userComponents/profile.js'
import Edit from './userComponents/edit.js'

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            key: "Profile"
        };
      }
    render(){

        return(
            <div>
                <Container className="container-user">
                  <Row>
                    <Col>
                    <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </div>
                    </Col>
                    <Col>
                    <div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={(e) => this.setState({key: e})}
                    >
                    <Tab eventKey="profile" title="Profile">
                        <Profile/>
                    </Tab>
                    <Tab eventKey="edit" title="Edit" >
                        <Edit/>
                    </Tab>
                </Tabs>
                </div>
                    </Col>
                </Row>
               
                </Container>
            </div>
        )
    }
}