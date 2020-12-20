import React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./style.css";

function Header() {

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Nerds Next Door</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Cell Phone</NavDropdown.Item>
            <NavDropdown.Item href="/">Tablet</NavDropdown.Item>
            <NavDropdown.Item href="/">Zoom/Skype</NavDropdown.Item>
            <NavDropdown.Item href="/">Wifi/Internet</NavDropdown.Item>
            <NavDropdown.Item href="/">Computer</NavDropdown.Item>
            <NavDropdown.Item href="/">Printer</NavDropdown.Item>            
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Other</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="/">Sign Up</Nav.Link>
          <Nav.Link href="/">Log In</Nav.Link>
          <Nav.Link href="/">Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
};

export default Header;
