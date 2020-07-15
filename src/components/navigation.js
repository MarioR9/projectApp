import React from 'react'
import { Navbar, NavDropdown,Nav, Button } from 'react-bootstrap';

export default class Navigation extends React.Component{

  render(){
    return (
      <div >
      <Navbar bg="light"  variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Deportes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Button variant="outline-success">Profile</Button>
      </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
  