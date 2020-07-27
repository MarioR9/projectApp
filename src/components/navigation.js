import React from 'react'
import { Navbar, NavDropdown,Nav, Button } from 'react-bootstrap';

let names;
let deporte;
export default class Navigation extends React.Component{
  
  
  render(){
    names = this.props.events.map(e => e.deporte)
    deporte = [...new Set(names)] //remote duplicate for each deporte.
    return (
      <div >
      <Navbar className="nav-color" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <NavDropdown  title="Categorias" id="basic-nav-dropdown">
              <NavDropdown  bg="dark"  variant="dark" expand="lg" title="Deportes" id="basic-nav-dropdown">
                {deporte.map(element => 
                <NavDropdown.Item key={element} href={`/${element}`} onSelect={()=>this.props.handleCategorySelection(element)}>{element}</NavDropdown.Item>
                )}
            </NavDropdown>
            <NavDropdown title="Eventos"  id="basic-nav-dropdown">
              <NavDropdown.Item href="/cumpleanos">Cumpleanos</NavDropdown.Item>
              <NavDropdown.Item href="/matrimonio">Matrimonio</NavDropdown.Item>
              <NavDropdown.Item href="/graduacion">Graduacion</NavDropdown.Item>
            </NavDropdown>
            </NavDropdown>
          </Nav>
          <NavDropdown.Item href="/noticias">Noticias</NavDropdown.Item>
            <Button variant="outline-success">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
              </svg>
            </Button>
      </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
  