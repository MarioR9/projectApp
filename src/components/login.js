import React from 'react'
import { Modal,Button  } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';


export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            name: '',
            email: '',
            picture:''
          };
    }

    render(){
    const responseFacebook = (response) => {
        console.log(response);
      }
    const componentClicked = () => console.log('Clicked')  
        return(
            <div>
                 <Modal
                show={this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Facebook</h4>
                    <FacebookLogin
                    appId="2854741097907041"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />,
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}