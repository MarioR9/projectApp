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
      
      <Button variant="outline" href="/home">
      <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg>
      </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <NavDropdown  title="Categorias" id="basic-nav-dropdown">
              <NavDropdown  bg="dark"  variant="dark" expand="lg" title="Deportes" id="basic-nav-dropdown">
                {deporte.map(element => 
                <NavDropdown.Item key={element.toLowerCase()} href='/events' onSelect={()=>this.props.handleCategorySelection(element.toLowerCase())}>{element.toLowerCase()}</NavDropdown.Item>
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
      </Navbar.Collapse>
      <Button variant="outline-success" href="/user">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
              </svg>
            </Button>
            <Button variant="outline-success" href="/user">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
              </svg>
            </Button>
      </Navbar>
      </div>
    );
  }
}
  