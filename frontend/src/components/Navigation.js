import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Pet Shop</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/adopt">Adopt a pet</Nav.Link>
    </Nav>
  </Navbar>
);

export default Navigation;
