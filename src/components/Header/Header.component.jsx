import * as React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';




export default function Header(props){
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Lugares Loucos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={'/sobre'}>Sobre</Nav.Link>
          <Nav.Link href={'/'}>Home</Nav.Link>
          <Nav.Link href={'/posts'}>Posts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}