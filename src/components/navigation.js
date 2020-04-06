import React from 'react'
import { Navbar, NavDropdown,Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class Navigation extends React.Component{

  render(){
    return (
      <div >
      <Navbar bg="dark"  variant="dark" expand="lg">
      <Navbar.Brand href="#home">App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => this.props.handleModalShow()}>Log In</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
          <Nav.Link  inline href="#link">Link</Nav.Link>
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
  