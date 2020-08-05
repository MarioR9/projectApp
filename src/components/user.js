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
                <div className="container-user">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={(e) => this.setState({key: e})}
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