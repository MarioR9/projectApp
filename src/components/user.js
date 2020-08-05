import React from 'react'
import { Tabs , Tab, Card, Button, Row, Col, Container} from 'react-bootstrap';
import Profile from './userComponents/profile.js'
import Edit from './userComponents/edit.js'

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            key: "profile"
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
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" />
                <Card.Body>
                    <Card.Title>User Name</Card.Title>
                    <Card.Text>
                    User Details
                    </Card.Text>
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