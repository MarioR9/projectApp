import React from 'react';
import { Form, Col, Row} from 'react-bootstrap';


export default class Edit extends React.Component{
    render(){
        return(
            <div>
               <Form.Group>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Nombre
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" placeholder="nombre..." />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                    <Form.Label column lg={2}>
                        Email
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" placeholder="example@email.com..." />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                    <Form.Label column lg={2}>
                        Telefono
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" placeholder="+(codigo)99999999" />
                        </Col>
                    </Form.Row>
                </Form.Group>
            </div>
        )
    }
}