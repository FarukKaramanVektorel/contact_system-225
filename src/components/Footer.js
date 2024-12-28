import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
      <div className="footer">
        <Container>
          <Nav className="footer-nav">
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Anasayfa
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts" style={{ color: "white" }}>
              Kişiler
            </Nav.Link>
            <Nav.Link as={Link} to="/categories" style={{ color: "white" }}>
              Kategoriler
            </Nav.Link>
          </Nav>
        </Container>
        <div className="footer-copyright">
          © 2024 Kişisel Rehber. Tüm hakları saklıdır.
        </div>
      </div>
  );
};

export default Footer;