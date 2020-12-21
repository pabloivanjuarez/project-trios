import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import "./style.css";

function Header() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  console.log(logout);

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
          {/* <strong>Email:</strong> {currentUser.email} */}
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
};

export default Header;
