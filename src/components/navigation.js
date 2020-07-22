import React from 'react'
import { Navbar, NavDropdown,Nav, Button } from 'react-bootstrap';

let names;
let deporte;
export default class Navigation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {event: ""};
  }
  handleCategorySelection=(e)=>{
   this.setState({event: e.target.text})
   this.props.handleCategorySelection(e.target.text)
  }
  
  render(){
    names = this.props.events.map(e => e.deporte)
    console.log(names)
    deporte = [...new Set(names)] //remote duplicate for each deporte.
    console.log(deporte)
    return (
      <div >
      <Navbar className="nav-color" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <NavDropdown  title="Categorias" id="basic-nav-dropdown">
              <NavDropdown  bg="dark"  variant="dark" expand="lg" title="Deportes" id="basic-nav-dropdown">
                {deporte.map(element => 
                <NavDropdown.Item href={`/${this.state.event}`} onClick={this.handleCategorySelection}>{element}</NavDropdown.Item>
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
            <Button variant="outline-success">Profile</Button>
      </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
  