import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
// import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <>
    <Navbar bg="light" expand="lg">
      {error && <Alert variant="danger">{error}</Alert>}
      <Navbar.Brand className="font-weight-bold" href="/">Nerds Next Door</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="/services#phone">Cell Phone</NavDropdown.Item>
            <NavDropdown.Item href="/services#tablet">Tablet</NavDropdown.Item>
            <NavDropdown.Item href="/services#zoom">Zoom/Skype</NavDropdown.Item>
            <NavDropdown.Item href="/services#wifi">Wifi/Internet</NavDropdown.Item>
            <NavDropdown.Item href="/services#computer">Computer</NavDropdown.Item>
            <NavDropdown.Item href="/services#printer">Printer</NavDropdown.Item>            
            <NavDropdown.Divider />
            <NavDropdown.Item href="/services#other">Other</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Work" id="basic-nav-dropdown">
            <NavDropdown.Item href="/new-user">List Work</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/users">Service Workers</NavDropdown.Item>
          </NavDropdown>         
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
          {currentUser === null
            ? (<Nav className="ml-auto">
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Log In</Nav.Link>
              </Nav>)
            : (<Nav className="ml-auto">
                <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
                <Nav.Link href="/account">
                  <strong>Account:</strong> {currentUser.email}
                </Nav.Link>
              </Nav>)
          }
      </Navbar.Collapse>
    </Navbar>
    </>
  )
};

export default Header;
