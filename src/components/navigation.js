import React from 'react'
import { Navbar, NavDropdown,Nav, Button } from 'react-bootstrap';

export default class Navigation extends React.Component{

  render(){
    return (
      <div >
      <Navbar className="nav-color" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <NavDropdown  title="Categorias" id="basic-nav-dropdown">
              <NavDropdown  bg="dark"  variant="dark" expand="lg" title="Deportes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/futbol" >Futbol</NavDropdown.Item>
              <NavDropdown.Item href="/basket">Basket</NavDropdown.Item>
              <NavDropdown.Item href="/golf">Golf</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Eventos"  id="basic-nav-dropdown">
              <NavDropdown.Item href="/Cumpleanos">Cumpleanos</NavDropdown.Item>
              <NavDropdown.Item href="/Matrimonio">Matrimonio</NavDropdown.Item>
              <NavDropdown.Item href="/Graduacion">Graduacion</NavDropdown.Item>
            </NavDropdown>
            
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Noticias</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Button variant="outline-success">Profile</Button>
      </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
  