import React from 'react'
import { Tabs , Tab} from 'react-bootstrap';
import Profile from './userComponents/profile.js'


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
                <div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={(k) => this.setState({key: k})}
                    >
                    <Tab eventKey="profile" title="Profile">
                        <Profile/>
                    </Tab>
                    <Tab eventKey="edit" title="Edit" >
                    </Tab>
                </Tabs>
                </div>
            
            </div>
        )
    }
}