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
              <NavDropdown.Item href="/futbol" onClick={this.props.handleCategorySelection}>Futbol</NavDropdown.Item>
              <NavDropdown.Item href="/basket" onClick={this.props.handleCategorySelection}>Basket</NavDropdown.Item>
              <NavDropdown.Item href="/golf" onClick={this.props.handleCategorySelection}>Golf</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Eventos"  id="basic-nav-dropdown">
              <NavDropdown.Item href="/cumpleanos">Cumpleanos</NavDropdown.Item>
              <NavDropdown.Item href="/matrimonio">Matrimonio</NavDropdown.Item>
              <NavDropdown.Item href="/graduacion">Graduacion</NavDropdown.Item>
            </NavDropdown>
            </NavDropdown>
          </Nav>
          <NavDropdown.Item href="/noticias">Noticias</NavDropdown.Item>
            <Button variant="outline-success">Profile</Button>
      </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
  