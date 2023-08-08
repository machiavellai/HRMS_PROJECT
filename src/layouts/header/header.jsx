import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="#home">Your Company Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
