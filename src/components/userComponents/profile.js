import React from 'react';
import { Card} from 'react-bootstrap';

export default class Profile extends React.Component{
    render(){
        return(
            <div>
                <br></br>
                <Card.Title>{this.props.userDetails.details}</Card.Title>
                <Card.Text>{this.props.userDetails.description}</Card.Text>
            </div>
        )
    }
}