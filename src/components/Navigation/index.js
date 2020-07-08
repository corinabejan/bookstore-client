import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavBarItem from "./NavBarItem";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Corina's BookStore
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }} fill>
            <NavBarItem path="/" linkText="Homepage" />
          </Nav>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}
