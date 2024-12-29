import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Oturumu sonlandır
    navigate("/login"); // Anasayfaya yönlendir
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Rehber
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            <Nav.Link as={Link} to="/events">
              Etkinlikler
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleLogout}>
            Çıkış Yap
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;