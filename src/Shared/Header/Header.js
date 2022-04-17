import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="black"
      variant="light"
    >
      <Container>
        <Navbar.Brand className="fw-bold" as={CustomLink} to={"/home"}>
          <span className="brand-name">Desi Dhaba</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link as={CustomLink} to={"/feature"}>
              Features
            </Nav.Link>
            <Nav.Link as={CustomLink} to={"/blog"}>
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
