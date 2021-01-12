import React, { useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="nav" dark expand="md">
      <NavbarBrand>
        <Link className="menu" to="/"><b>JKT48 Theater Schedule</b></Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="menu" to="/team-j">Team J</Link>
          </NavItem>
          <NavItem>
            <Link className="menu" to="/team-k">Team KIII</Link>
          </NavItem>
          <NavItem>
            <Link className="menu" to="/team-t">Team T</Link>
          </NavItem>
          <NavItem>
            <Link className="menu" to="/academy-class-a">Academy Class A</Link>
          </NavItem>
          <NavItem>
            <Link className="menu" to="/all-schedule">All Schedule</Link>
          </NavItem>
          <NavItem>
            <Link className="menu" to="/live">Live</Link>
          </NavItem>
          <NavItem>
            <Link className="menu" to="/about">About</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
