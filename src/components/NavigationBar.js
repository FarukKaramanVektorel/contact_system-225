import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Rehber
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic navbar-nav" />
        <Navbar.Collapse id="basic navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Anasayfa
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts">
              Kişiler
            </Nav.Link>
          
            <Nav.Link as={Link} to="/categories">
              Kategoriler
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;


