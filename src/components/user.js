import React from 'react'
import { Tabs , Tab} from 'react-bootstrap';

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            key: "home"
        };
      }
    render(){

        return(
            <div>
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={(k) => this.setState({key: k})}
                >
                <Tab eventKey="home" title="Home">
                </Tab>
                <Tab eventKey="profile" title="Profile">
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                </Tab>
            </Tabs>
            </div>
        )
    }
}